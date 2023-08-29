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
  width: 300px;
  height: 400px;
  background-color: ${({ theme }) => theme.color.bg};
  border-radius: 20px;
`;
