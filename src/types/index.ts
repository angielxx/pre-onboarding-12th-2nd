interface RawUser {
  login: string;
  id: number;
}

export interface RawIssue {
  id: number;
  number: number;
  title: string;
  comments: number;
  created_at: string;
  user: RawUser;
}

export interface IssueItem {
  id: number;
  number: number;
  title: string;
  comments: number;
  author: string;
  created_at: string;
}
