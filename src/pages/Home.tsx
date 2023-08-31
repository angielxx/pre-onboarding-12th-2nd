import { WantedAdItem } from '@/components/WantedAdItem';
import { IssueListItem } from '@/components/IssueListItem';
import { ApiLoader } from '@/components/ApiLoader';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import { IssueListPage } from '@/components/IssueListPage/IssueListPage';

export const Home = () => {
  // const { data: pages, isLoading, isError } = useInfiniteScroll();

  const navigation = useNavigate();

  return <IssueListPage />;
};

const ItemWrapper = styled.div`
  cursor: pointer;
  padding: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.color.grey800};
  }
`;

const IssueList = styled.div`
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
