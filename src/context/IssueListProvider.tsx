import { getIssuesPerPage } from '@/apis/api';
import { refineIssuesList } from '@/apis/service';
import { IssueItem } from '@/types';
import { ReactNode, createContext, useEffect, useState } from 'react';

interface PageType {
  page: number;
  data: IssueItem[];
}

interface StateType {
  data: PageType[];
  page: number;
}

interface DispatchType {
  fetchCurrentPage: (page: number) => void;
  addPage: () => void;
}

export const IssueListStateContext = createContext<StateType | null>(null);
export const IssueListDispatchContext = createContext<DispatchType | null>(
  null
);

export const IssueListProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<PageType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const state = { data, page };
  const dispatch = { fetchCurrentPage, addPage };

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  function addPage() {
    setPage((prev) => prev + 1);
  }

  async function fetchCurrentPage(pageNum: number) {
    const response = await getIssuesPerPage(pageNum);
    const newPage = refineIssuesList(response);

    setData((prev) => {
      if (!prev.some((item) => item.page === pageNum)) {
        return [...prev, { page: pageNum, data: newPage }];
      } else {
        return prev;
      }
    });
  }

  return (
    <IssueListStateContext.Provider value={state}>
      <IssueListDispatchContext.Provider value={dispatch}>
        {children}
      </IssueListDispatchContext.Provider>
    </IssueListStateContext.Provider>
  );
};
