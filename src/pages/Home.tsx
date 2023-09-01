import { useEffect, useState } from 'react';
import { useDetectScroll } from '@/hooks/useDetectScroll';
import { IssueListPageContainer } from '@/components/IssueListPageContainer';
import { useContextNullCheck } from '@/hooks/useContextNullCheck';

export const Home = () => {
  const [pageList, setPageList] = useState([1]);
  const { isEnd, setIsEnd } = useDetectScroll();

  const { state, dispatch } = useContextNullCheck();

  const {
    hasNextPage,
    isLoading: prevPageIsLoading,
    error: prevPageError,
  } = state;

  useEffect(() => {
    if (isEnd) {
      setPageList((prev) => [...prev, prev[prev.length - 1] + 1]);
      if (!prevPageIsLoading && !prevPageError) {
        setIsEnd(false);
      }
    }
  }, [isEnd]);

  return (
    <div>
      {pageList.map((page) => (
        <IssueListPageContainer key={page} page={page} />
      ))}
    </div>
  );
};
