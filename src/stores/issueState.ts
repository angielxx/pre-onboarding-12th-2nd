import { IssueItem } from '@/types';
import { atom } from 'recoil';

interface Page {
  page: number;
  data: IssueItem[];
}

const issueState = atom<Page[]>({
  key: 'issueState',
  default: [],
});

export default issueState;
