import { useContextNullCheck } from '@/hooks/useContextNullCheck';
import { IssueListItem } from './IssueListItem';
import { styled } from 'styled-components';
import { WantedAdItem } from './WantedAdItem';
import { Fragment } from 'react';

interface Props {
  page: number;
}

export const IssueList = ({ page }: Props) => {
  const { state } = useContextNullCheck();
  const { issueList } = state;

  if (!issueList || issueList.length < page) {
    return null;
  }

  return (
    <ListContainer>
      {issueList[page - 1]?.data.map((issue, idx) => (
        <Fragment key={issue.id}>
          <IssueListItem issue={issue} />
          {idx % 4 == 3 && <WantedAdItem />}
        </Fragment>
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  min-width: 300px;
  max-width: 700px;
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
