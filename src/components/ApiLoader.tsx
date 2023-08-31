import { styled } from 'styled-components';

export const ApiLoader = () => {
  return (
    <Container>
      <p>Loading...</p>
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
