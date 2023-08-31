import { useNavigate } from 'react-router';

import { IssueListPage } from '@/components/IssueListPage/IssueListPage';
import { useContextNullCheck } from '@/hooks/useContextNullCheck';
import { useState } from 'react';

export const Home = () => {
  // const { data: pages, isLoading, isError } = useInfiniteScroll();

  const { state, dispatch } = useContextNullCheck();
  const { data, isLoading } = state;
  const [page, setPage] = useState(1);

  const navigation = useNavigate();

  return <IssueListPage page={page} />;
};
