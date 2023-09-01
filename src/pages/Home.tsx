import { useEffect, useState } from 'react';
import { useDetectScroll } from '@/hooks/useDetectScroll';
import { IssueListPageContainer } from '@/components/IssueListPageContainer';
import { useContextNullCheck } from '@/hooks/useContextNullCheck';

export const Home = () => {
  const [pageList, setPageList] = useState([1]);
  const { isEnd, setIsEnd } = useDetectScroll();

  const { state, dispatch } = useContextNullCheck();
  const { addPage } = dispatch;

  const {
    hasNextPage,
    isLoading: prevPageIsLoading,
    error: prevPageError,
  } = state;

  useEffect(() => {
    if (isEnd) {
      if (!prevPageIsLoading && !prevPageError && hasNextPage) {
        console.log('스크롤 end');
        setPageList((prev) => [...prev, prev[prev.length - 1] + 1]);
        addPage();
        console.log('페이지추가', pageList);
        setIsEnd(false);
      } else {
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
