import { IssueListPage } from '@/components/IssueListPage/IssueListPage';
import { useContextNullCheck } from '@/hooks/useContextNullCheck';
import { useEffect, useState } from 'react';
import { useDetectScroll } from '@/hooks/useDetectScroll';
import { IssueList } from '@/components/IssueList';
import ApiErrorBoundary from '@/components/ErrorBoundary/ApiErrorBoundary';
import { IssuePageFetcher } from '@/components/IssueListPage/IssuePageFetcher';
import { ApiError } from '@/components/ApiError';

export const Home = () => {
  // const [page, setPage] = useState(1);
  const [pageList, setPageList] = useState([1]);

  const { isEnd, setIsEnd } = useDetectScroll();

  const { state, dispatch } = useContextNullCheck();
  const { data } = state;
  const { addPage } = dispatch;

  useEffect(() => {
    console.log('home');
  }, []);

  useEffect(() => {
    if (isEnd) {
      setPageList((prev) => [...prev, prev[prev.length - 1] + 1]);
      setIsEnd(false);
    }
  }, [isEnd]);

  return (
    <div>
      {pageList.map((page) => (
        <IssueListPage page={page} />
      ))}
      {/* {data.map((pageData) => (
        <IssueListPage key={pageData.page} page={pageData.page} />
      ))} */}
    </div>
  );
};
