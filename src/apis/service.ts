import parseTimeStamp from '@/utils/parseTimeStamp';

export const refineIssuesList = (issues) => {
  return issues.map((issue) => {
    const { id, number, title, comments, user, created_at: timestamp } = issue;
    const author = { name: user.login, avatar: user.avatar_url };
    const created_at = parseTimeStamp(timestamp);

    return {
      id,
      number,
      title,
      comments,
      author,
      created_at,
    };
  });
};

export const refineIssue = (issue) => {
  const {
    id,
    number,
    title,
    body,
    comments,
    user,
    created_at: timestamp,
  } = issue;

  const author = { name: user.login, avatar: user.avatar_url };
  const created_at = parseTimeStamp(timestamp);

  return { id, number, title, body, author, comments, created_at };
};
