import { WantedAdItem } from '@/components/WantedAdItem';
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
        <>
          {data.map((issue, idx) => (
            <>
              <ItemWrapper
                key={issue.id}
                onClick={() => navigation(`/issues/${issue.number}`)}
              >
                <IssueListItem issue={issue} />
              </ItemWrapper>
              {idx % 5 === 4 && <WantedAdItem />}
            </>
          ))}
        </>
      ))}
      {isLoading && <Loader />}
    </IssueList>
  );
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
