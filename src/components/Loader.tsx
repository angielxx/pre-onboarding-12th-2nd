import { styled } from 'styled-components';

export const Loader = () => {
  return (
    <Container>
      <p>loading...</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  color: ${({ theme }) => theme.color.secondary};
`;
