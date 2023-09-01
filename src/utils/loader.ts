import { getIssueById } from '@/apis/api';
import { refineIssue } from '@/apis/service';

export const issueLoader = async (id: number) => {
  const response = await getIssueById(id);
  const issue = refineIssue(response);
  return issue;
};
