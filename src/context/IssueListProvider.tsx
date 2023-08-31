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
  isLoading: boolean;
  error: Error | null;
}

interface DispatchType {
  fetchCurrentPage: () => void;
  getPageByNumber: (page: number) => PageType | undefined;
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

  const state = { data, page, isLoading, error };
  const dispatch = { fetchCurrentPage, getPageByNumber };

  async function fetchCurrentPage() {
    if (isLoading || error) return;

    try {
      setIsLoading(true);

      const response = await getIssuesPerPage(state.page);
      const newPage = refineIssuesList(response);

      setData((prev) => [...prev, { page: page, data: newPage }]);
      setPage((prev) => prev + 1);
      setIsLoading(false);
      return;
    } catch (err) {
      setError(err);
    }
  }

  function getPageByNumber(page: number) {
    const result = data.find((pageData) => pageData.page === page);
    if (!result) return;
    return result;
  }

  return (
    <IssueListStateContext.Provider value={state}>
      <IssueListDispatchContext.Provider value={dispatch}>
        {children}
      </IssueListDispatchContext.Provider>
    </IssueListStateContext.Provider>
  );
};
