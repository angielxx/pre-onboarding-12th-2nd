import { IssueListItem } from '@/components/IssueListItem';
import { Loader } from '@/components/Loader';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useEffect } from 'react';

export const Home = () => {
  const {
    data: pages,
    isLoading,
    isError,
    fetchNextPage,
  } = useInfiniteScroll();

  useEffect(() => {
    console.log(pages);
  }, []);

  return (
    <div>
      {pages?.map(({ page, data }) => (
        <div key={page}>
          {data.map((issue) => (
            <IssueListItem key={issue.id} issue={issue} />
          ))}
        </div>
      ))}
      {isLoading && <Loader />}
    </div>
  );
};
