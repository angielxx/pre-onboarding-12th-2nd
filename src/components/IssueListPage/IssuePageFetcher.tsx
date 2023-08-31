import { ReactNode, useEffect } from 'react';

import { useContextNullCheck } from '@/hooks/useContextNullCheck';
import { ApiLoader } from '../ApiLoader';

interface Props {
  children: ReactNode;
}

export const IssuePageFetcher = ({ children }: Props) => {
  const { state, dispatch } = useContextNullCheck();
  const { isLoading, error } = state;
  const { fetchCurrentPage } = dispatch;

  useEffect(() => {
    fetchCurrentPage();
  }, []);

  if (error) {
    throw Error(error.message);
  }

  if (isLoading) {
    return <ApiLoader />;
  }

  return children;
};
