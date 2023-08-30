import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { styled } from 'styled-components';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype/lib';
import rehypeStringify from 'rehype-stringify';
import ReactMarkdown from 'react-markdown';
import { IssueItem } from '@/types';
import { IssueListItem } from '@/components/IssueListItem';

export const Issue = () => {
  const issue = useLoaderData() as IssueItem;

  const [content, setContent] = useState();

  const processor = async () => {
    const { value } = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(issue.body);

    setContent(value);
  };

  useEffect(() => {
    processor();
  }, []);

  return (
    <PageWrapper>
      <HeaderContainer>
        <Avatar img={issue.author.avatar} />
        <IssueListItem issue={issue} />
      </HeaderContainer>
      <article>
        <ReactMarkdown children={issue.body} className="markdown-body" />
      </article>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  min-width: 300px;
  max-width: 700px;
  padding: 16px;
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

const Avatar = styled.div<{ img: string }>`
  width: 48px;
  height: 48px;
  border-radius: 99px;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
`;
