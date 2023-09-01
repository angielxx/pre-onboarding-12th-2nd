import { useLoaderData } from 'react-router';
import { styled } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { IssueItem } from '@/types';
import { IssueListItem } from '@/components/IssueListItem';
import remarkGfm from 'remark-gfm';

export const Issue = () => {
  const issue = useLoaderData() as IssueItem;

  if (!issue) return;
  const { author, body } = issue;

  return (
    <PageWrapper id="page wrapper">
      <HeaderContainer>
        <Avatar img={author.avatar} />
        <IssueListItem issue={issue} />
      </HeaderContainer>
      <article>
        {body && (
          <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown-body">
            {body}
          </ReactMarkdown>
        )}
      </article>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 60vw;
  min-width: 400px;
  max-width: 700px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  article {
    margin: 32px 0 32px 0;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.color.grey600};
`;

const Avatar = styled.div<{ img?: string }>`
  width: 48px;
  height: 48px;
  border-radius: 99px;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
`;
