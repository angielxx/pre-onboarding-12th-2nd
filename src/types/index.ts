interface RawUser {
  id: number;
  login: string;
  avatar_url: string;
}

export interface RawIssue {
  id: number;
  number: number;
  title: string;
  body: string;
  comments: number;
  created_at: string;
  user: RawUser;
}

export interface User {
  name: string;
  avatar: string;
}

export interface IssueItem {
  id: number;
  number: number;
  title: string;
  comments: number;
  author: User;
  created_at: string;
}
