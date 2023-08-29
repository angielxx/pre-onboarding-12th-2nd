import { createBrowserRouter } from 'react-router-dom';

import { Home, Issue, Root } from '@/pages';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'issues/:id',
        element: <Issue />,
      },
    ],
  },
]);

export default router;
