import { styled } from 'styled-components';

interface Props {
  error: Error;
}

export const ErrorPage = ({ error }: Props) => {
  return (
    <PageContainer>
      <p>{error.message}</p>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;
