import { IssueItem } from '@/types';
import { styled } from 'styled-components';

interface Props {
  issue: IssueItem;
}

export const Issue = ({ issue }: Props) => {
  const { number, title, comments, author, created_at } = issue;

  return (
    <ItemContainer>
      <div>
        <div>
          <p>{number}</p>
          <p>{title}</p>
        </div>
        <div>
          <span>작성자 : {author},</span>
          <span>작성일 : {created_at}</span>
        </div>
      </div>
      <div>
        <p>코멘트 : {comments} </p>
      </div>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
`;
