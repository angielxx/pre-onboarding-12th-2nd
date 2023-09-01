import ApiErrorBoundary from '@/ErrorBoundary/ApiErrorBoundary';
import { ApiError } from './ApiError';
import { IssuePageFetcher } from '@/fetcher/IssuePageFetcher';
import { IssueList } from './IssueList';

interface Props {
  page: number;
}

export const IssueListPageContainer = ({ page }: Props) => {
  return (
    <ApiErrorBoundary
      fallback={({ error, reset }) => (
        <ApiError error={error} resetErrorBoundary={reset} />
      )}
    >
      <IssuePageFetcher page={page}>
        <IssueList page={page} />
      </IssuePageFetcher>
    </ApiErrorBoundary>
  );
};
