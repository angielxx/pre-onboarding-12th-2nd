import { Header } from '@/components/Header';
import { Outlet } from 'react-router';
import { styled } from 'styled-components';

export const Root = () => {
  return (
    <RootContainer>
      <Header />
      <Outlet />
    </RootContainer>
  );
};

const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  /* overflow: scroll; */
  /* overflow-x: hidden; */
  background-color: ${({ theme }) => theme.color.bg};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
