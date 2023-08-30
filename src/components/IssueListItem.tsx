import { IssueItem } from '@/types';
import { styled } from 'styled-components';

interface Props {
  issue: IssueItem;
}

export const IssueListItem = ({ issue }: Props) => {
  const { number, title, comments, author, created_at } = issue;

  return (
    <ItemContainer>
      <MainContainer>
        <div style={{ flex: 1 }}>
          <p>#{number}</p>
          <p>{title}</p>
        </div>
        <div style={{ flex: 4 }}>
          <span>작성자 : {author.name}, </span>
          <span>작성일 : {created_at}</span>
        </div>
      </MainContainer>
      <SmallContainer>
        <span>코멘트 : {comments} </span>
      </SmallContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px;
  justify-content: space-between;
  border-radius: 4px;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.color.grey800};
  }
  p {
    font-size: 16px;
  }
  span {
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontSecondary};
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 4;

  div:first-child {
    display: flex;
    gap: 8px;
    line-height: 1.2rem;
  }
  div:first-child {
  }
`;

const SmallContainer = styled.div`
  flex: 1;
`;
