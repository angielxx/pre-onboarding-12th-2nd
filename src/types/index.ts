import { Endpoints } from '@octokit/types';

export type Issue = Endpoints['GET /issues']['response']['data'][0];

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
  name: string | undefined;
  avatar: string | undefined;
}

export interface IssueItem {
  id: number;
  number: number;
  title: string;
  body: string | null | undefined;
  comments: number;
  author: User;
  created_at: string;
}
