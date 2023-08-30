import { IssueListItem } from '@/components/IssueListItem';
import { Loader } from '@/components/Loader';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';

export const Home = () => {
  const { data: pages, isLoading, isError } = useInfiniteScroll();

  const navigation = useNavigate();

  return (
    <IssueList>
      {pages?.map(({ page, data }) => (
        <PageWrapper key={page}>
          {data.map((issue) => (
            <ItemWrapper
              key={issue.id}
              onClick={() => navigation(`/issues/${issue.id}`)}
            >
              <IssueListItem issue={issue} />
            </ItemWrapper>
          ))}
        </PageWrapper>
      ))}
      {isLoading && <Loader />}
    </IssueList>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ItemWrapper = styled.div`
  cursor: pointer;
`;

const IssueList = styled.div`
  min-width: 300px;
  max-width: 700px;
  padding: 16px;
`;
