import { ReactNode, useEffect, useState } from 'react';

import { useContextNullCheck } from '@/hooks/useContextNullCheck';
import { ApiLoader } from '../components/ApiLoader';

interface Props {
  children: ReactNode;
  page: number;
}

export const IssuePageFetcher = ({ children, page }: Props) => {
  const { state, dispatch } = useContextNullCheck();

  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const { fetchCurrentPage } = dispatch;

  const fetchThisPage = async () => {
    try {
      setIsLoadingPage(true);
      await fetchCurrentPage(page);
      setIsLoadingPage(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchThisPage();
  }, []);

  if (page === 3) {
    throw Error('에러지롱');
  }

  if (error) {
    throw Error(error.message);
  }

  if (isLoadingPage) {
    return <ApiLoader />;
  }

  return children;
};
