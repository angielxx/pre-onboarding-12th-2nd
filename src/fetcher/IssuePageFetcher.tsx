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
      await fetchIssueByPage(page);
    } catch (err) {
      setThisPageError(err);
      setPrevPageError(err);
    } finally {
      setThisPageIsLoading(false);
    }
  };

  useEffect(() => {
    if (hasNextPage && !prevPageIsLoading && !prevPageError) {
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
