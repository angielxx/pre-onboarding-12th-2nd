import { Outlet } from 'react-router';

export const Root = () => {
  return (
    <div>
      <p>root</p>
      <Outlet />
    </div>
  );
};
