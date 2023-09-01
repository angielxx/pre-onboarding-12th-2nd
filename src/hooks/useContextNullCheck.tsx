import {
  IssueListDispatchContext,
  IssueListStateContext,
} from '@/context/IssueListProvider';
import { useContext } from 'react';

export const useContextNullCheck = () => {
  const state = useContext(IssueListStateContext);
  const dispatch = useContext(IssueListDispatchContext);

  if (state === null) throw new Error('Cannot find IssueListState');
  if (dispatch === null) throw new Error('Cannot find IssueListDispatch');

  return { state, dispatch };
};
