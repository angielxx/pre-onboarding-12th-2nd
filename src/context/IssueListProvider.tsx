import { getIssuesPerPage } from '@/apis/api';
import { refineIssuesList } from '@/apis/service';
import { IssueItem } from '@/types';
import { ReactNode, createContext, useEffect, useRef, useState } from 'react';

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
  fetchCurrentPage: (
    page: number
  ) => (page: number) => { isLoading: boolean; error: Error | null };
  getPageByNumber: (page: number) => PageType | undefined;
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

  const state = { data, page, isLoading, error };
  const dispatch = { fetchCurrentPage, getPageByNumber, addPage };

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  function addPage() {
    setPage((prev) => prev + 1);
    console.log('added page', page);
  }

  async function fetchCurrentPage(pageNum: number) {
    if (isLoading || error) return { isLoading, error };
    console.log('fetch cur', pageNum);
    try {
      setIsLoading(true);

      const response = await getIssuesPerPage(pageNum);
      const newPage = refineIssuesList(response);

      setData((prev) => {
        if (!prev.some((item) => item.page === pageNum)) {
          return [...prev, { page: pageNum, data: newPage }];
        } else {
          return prev;
        }
      });
      // page.current = page.current + 1;
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
