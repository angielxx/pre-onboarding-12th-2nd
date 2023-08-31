import { ReactNode, useEffect, useState } from 'react';

import { useContextNullCheck } from '@/hooks/useContextNullCheck';
import { ApiLoader } from '../ApiLoader';

interface Props {
  children: ReactNode;
  page: number;
}

export const IssuePageFetcher = ({ children, page }: Props) => {
  const { state, dispatch } = useContextNullCheck();
  // const { isLoading, error } = state;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { fetchCurrentPage } = dispatch;

  useEffect(() => {
    fetchCurrentPage(page);
    console.log('fetcher');
  }, []);

  if (error) {
    throw Error(error.message);
  }

  if (isLoading) {
    return <ApiLoader />;
  }

  return children;
};
