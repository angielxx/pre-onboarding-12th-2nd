import { styled } from 'styled-components';

export const Header = () => {
  const organization = 'facebook';
  const repository = 'react';

  return (
    <HeaderContainer>
      <p>
        {organization} / {repository}
      </p>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  p {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
