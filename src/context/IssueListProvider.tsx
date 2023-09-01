import { getIssuesPerPage } from '@/apis/api';
import { refineIssuesList } from '@/apis/service';
import { IssueItem } from '@/types';
import { ReactNode, createContext, useEffect, useState } from 'react';

interface PageType {
  page: number;
  data: IssueItem[];
}

interface StateType {
  issueList: PageType[];
  page: number;
  hasNextPage: boolean;
  isLoading: boolean;
  error: Error | null;
}

interface DispatchType {
  fetchIssueByPage: (page: number) => void;
  addPage: () => void;
  setPrevPageIsLoading: (value: boolean) => void;
  setPrevPageError: (error: Error) => void;
}

export const IssueListStateContext = createContext<StateType | null>(null);
export const IssueListDispatchContext = createContext<DispatchType | null>(
  null
);

export const IssueListProvider = ({ children }: { children: ReactNode }) => {
  const [issueList, setIssueList] = useState<PageType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const state = { issueList, page, hasNextPage, isLoading, error };
  const dispatch = {
    fetchIssueByPage,
    addPage,
    setPrevPageIsLoading,
    setPrevPageError,
  };

  useEffect(() => {
    console.log('data', issueList);
  }, [issueList]);

  function setPrevPageIsLoading(value: boolean) {
    setIsLoading(value);
  }

  function setPrevPageError(error: Error) {
    setError(error);
  }

  function addPage() {
    setPage((prev) => prev + 1);
  }

  async function fetchIssueByPage(pageNum: number) {
    const data = await getIssuesPerPage(pageNum);
    const newPage = refineIssuesList(data);

    setIssueList((prev) => {
      if (!prev.some((item) => item.page === pageNum)) {
        return [...prev, { page: pageNum, data: newPage }];
      } else {
        return prev;
      }
    });
    setHasNextPage(!!data.length);
  }

  return (
    <IssueListStateContext.Provider value={state}>
      <IssueListDispatchContext.Provider value={dispatch}>
        {children}
      </IssueListDispatchContext.Provider>
    </IssueListStateContext.Provider>
  );
};
