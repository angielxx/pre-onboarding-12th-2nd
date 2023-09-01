import { Issue } from '../types';
import parseTimeStamp from '../utils/parseTimeStamp';

export const refineIssuesList = (issues: Issue[]) => {
  return issues.map((issue: Issue) => {
    const {
      id,
      number,
      title,
      comments,
      user,
      created_at: timestamp,
      body,
    } = issue;
    const author = { name: user?.login, avatar: user?.avatar_url };
    const created_at = parseTimeStamp(timestamp);

    return {
      id,
      number,
      title,
      body,
      comments,
      author,
      created_at,
    };
  });
};

export const refineIssue = (issue: Issue) => {
  const {
    id,
    number,
    title,
    body,
    comments,
    user,
    created_at: timestamp,
  } = issue;

  const author = { name: user?.login, avatar: user?.avatar_url };
  const created_at = parseTimeStamp(timestamp);

  return { id, number, title, body, author, comments, created_at };
};
