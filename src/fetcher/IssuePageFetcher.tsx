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
  const { fetchIssueByPage, setPrevPageIsLoading, setPrevPageError } = dispatch;

  const fetchThisPage = async () => {
    try {
      setThisPageIsLoading(true);
      setPrevPageIsLoading(true);
      await fetchIssueByPage(page);
    } catch (err) {
      setThisPageError(err);
    } finally {
      setThisPageIsLoading(false);
      setPrevPageIsLoading(false);
    }
  };

  useEffect(() => {
    fetchThisPage();
  }, []);

  if (page === 3) {
    setThisPageError(Error('에러지롱'));
    setPrevPageError(Error('에러지롱'));
    throw Error('에러지롱');
  }

  if (thisPageError) {
    throw Error(thisPageError.message);
  }

  if (thisPageIsLoading) {
    return <ApiLoader />;
  }

  return children;
};
