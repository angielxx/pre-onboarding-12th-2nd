import { useContextNullCheck } from '@/hooks/useContextNullCheck';
import { IssueListItem } from './IssueListItem';
import { useEffect } from 'react';
import { styled } from 'styled-components';

interface Props {
  page: number;
}

export const IssueList = ({ page }: Props) => {
  const { state, dispatch } = useContextNullCheck();
  const { data } = state;

  if (!data || data.length < page) {
    return null;
  }

  return (
    <ListContainer>
      {data[page - 1]?.data.map((issue) => (
        <IssueListItem key={issue.id} issue={issue} />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  min-width: 300px;
  max-width: 700px;
  margin: 16px;
  display: flex;
  flex-direction: column;

  & > div {
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.color.grey700};
  }
  & > div:last-child {
    border: none;
  }
`;
