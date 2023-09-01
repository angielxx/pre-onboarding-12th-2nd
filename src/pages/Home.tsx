import { useEffect, useState } from 'react';
import { useDetectScroll } from '@/hooks/useDetectScroll';
import { IssueListPageContainer } from '@/components/IssueListPageContainer';

export const Home = () => {
  const [pageList, setPageList] = useState([1]);
  const { isEnd, setIsEnd } = useDetectScroll();

  useEffect(() => {
    if (isEnd) {
      setPageList((prev) => [...prev, prev[prev.length - 1] + 1]);
      setIsEnd(false);
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
