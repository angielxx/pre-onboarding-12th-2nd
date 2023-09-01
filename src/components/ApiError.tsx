import { styled } from 'styled-components';

interface Props {
  error: Error;
  resetErrorBoundary: (...args: unknown[]) => void;
}

export const ApiError = ({ error, resetErrorBoundary }: Props) => {
  const retry = () => {};

  return (
    <Container>
      <p>{error.message}</p>
      <button onClick={retry}>새로고침</button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: red;
  }
`;
