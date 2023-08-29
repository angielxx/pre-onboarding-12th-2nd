import { createBrowserRouter } from 'react-router-dom';

import { Home, Issue } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'issues/:id',
        element: <Issue />,
      },
    ],
  },
]);

export default router;
