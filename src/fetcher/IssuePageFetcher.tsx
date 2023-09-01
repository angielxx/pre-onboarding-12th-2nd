import { ReactNode, useEffect, useState } from 'react';

import { useContextNullCheck } from '@/hooks/useContextNullCheck';
import { ApiLoader } from '../components/ApiLoader';

interface Props {
  children: ReactNode;
  page: number;
}

export const IssuePageFetcher = ({ children, page }: Props) => {
  const { state, dispatch } = useContextNullCheck();

  const {
    hasNextPage,
    isLoading: prevPageIsLoading,
    error: prevPageError,
  } = state;

  const [thisPageIsLoading, setThisPageIsLoading] = useState<boolean>(false);
  const [thisPageError, setThisPageError] = useState<Error | null>(null);
  const { fetchIssueByPage, setPrevPageError, setPrevPageIsLoading } = dispatch;

  const fetchThisPage = async () => {
    try {
      setThisPageIsLoading(true);
      setPrevPageIsLoading(true);
      await fetchIssueByPage(page);
      console.log('로딩 시작', thisPageIsLoading, prevPageIsLoading);
      if (page === 3) {
        const err = new Error('에러');
        setThisPageError(err);
        setPrevPageError(err);
        throw err;
      }
    } catch (err) {
      if (err instanceof Error) {
        setThisPageError(err);
        setPrevPageError(err);
      } else {
        throw Error('unexpected error');
      }
    } finally {
      setThisPageIsLoading(false);
      setPrevPageIsLoading(false);
      console.log('로딩 끝', thisPageIsLoading, prevPageIsLoading);
    }
  };

  useEffect(() => {
    if (hasNextPage && !prevPageIsLoading && !prevPageError) {
      console.log('fetch 시작', page);
      fetchThisPage();
    }
  }, []);

  if (thisPageError) {
    throw thisPageError;
  }

  if (thisPageIsLoading) {
    return <ApiLoader />;
  }

  return children;
};
