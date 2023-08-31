import { useContextNullCheck } from '@/hooks/useContextNullCheck';
import { IssueListItem } from './IssueListItem';

interface Props {
  page: number;
}

export const IssueList = ({ page }: Props) => {
  const { dispatch } = useContextNullCheck();
  const { getPageByNumber } = dispatch;

  const issues = getPageByNumber(page);

  return (
    <div>
      {issues.map((issue) => (
        <IssueListItem key={issue.id} issue={issue} />
      ))}
    </div>
  );
};
