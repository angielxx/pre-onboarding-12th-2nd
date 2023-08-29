import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { getIssuesPerPage } from '@/apis/api';
import { refineIssuesList } from '@/apis/service';
import issueState from '@/stores/issueState';

export const useInfiniteScroll = () => {
  const [pages, setPages] = useRecoilState(issueState);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const pageNumber = useRef<number>(1);
  const [isEnd, setIsEnd] = useState(false);

  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
  }, []);

  const detectIsEnd = async () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setIsEnd(true);
      lockScroll();
      await fetchNextPage();
      unlockScroll();
      setIsEnd(false);
    }
  };

  const fetchPage = async (page: number) => {
    try {
      setIsError(false);
      setIsLoading(true);

      const response = await getIssuesPerPage(page);
      const newPage = refineIssuesList(response);

      setPages((prev) => [...prev, { page: page, data: newPage }]);
      pageNumber.current = page + 1;
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchNextPage = async () => {
    if (!isLoading) {
      fetchPage(pageNumber.current);
    }
  };

  useEffect(() => {
    fetchPage(1);
    window.addEventListener('scroll', detectIsEnd);

    return () => {
      setPages([]);
      window.removeEventListener('scroll', detectIsEnd);
    };
  }, []);

  useEffect(() => {
    console.log(isEnd);
  }, [isEnd]);

  return { data: pages, isLoading, isError, fetchNextPage };
};
