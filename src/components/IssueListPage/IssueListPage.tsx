import ApiErrorBoundary from '../ErrorBoundary/ApiErrorBoundary';
import { ApiError } from '../ApiError';
import { IssueList } from '../IssueList';
import { IssuePageFetcher } from './IssuePageFetcher';

interface Props {
  page: number;
}

export const IssueListPage = ({ page }: Props) => {
  return (
    <ApiErrorBoundary
      fallback={({ error, reset }) => <ApiError error={error} />}
    >
      <IssuePageFetcher page={page}>
        <IssueList page={page} />
      </IssuePageFetcher>
    </ApiErrorBoundary>
  );
};
