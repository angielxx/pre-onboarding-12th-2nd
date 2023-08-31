import { styled } from 'styled-components';

interface Props {
  error: Error;
}

export const ApiError = ({ error }: Props) => {
  return (
    <Container>
      <p>{error.message}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: red;
  }
`;
