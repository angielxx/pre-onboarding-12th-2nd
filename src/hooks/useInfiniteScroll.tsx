import { useEffect, useRef, useState } from 'react';

import { getIssuesPerPage } from '@/apis/api';
import { refineIssuesList } from '@/apis/service';
import { useDetectScroll } from './useDetectScroll';

export const useInfiniteScroll = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const pageNumber = useRef<number>(1);

  const { isEnd, setIsEnd } = useDetectScroll();

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
      await fetchPage(pageNumber.current);
    }
  };

  useEffect(() => {
    fetchPage(1);

    return () => {
      setPages([]);
    };
  }, []);

  useEffect(() => {
    if (isEnd) {
      fetchNextPage();
      setIsEnd(false);
    }
  }, [isEnd]);

  return { data: pages, isLoading, isError };
};
