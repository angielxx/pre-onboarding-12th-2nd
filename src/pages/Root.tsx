import GlobalErrorBoundary from '@/ErrorBoundary/GlobalErrorBoundary';
import { Header } from '@/components/Header';
import { Outlet } from 'react-router';
import { styled } from 'styled-components';
import { ErrorPage } from './ErrorPage';

export const Root = () => {
  return (
    <GlobalErrorBoundary
      fallback={({ error, reset }) => <ErrorPage error={error} />}
    >
      <RootContainer>
        <Header />
        <Outlet />
      </RootContainer>
    </GlobalErrorBoundary>
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
