import { createBrowserRouter } from 'react-router-dom';

import { Home, Issue, Root } from '@/pages';
import { issueLoader } from '@/utils/loader';

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
        loader: ({ params }) => issueLoader(Number(params.id)),
      },
    ],
  },
]);

export default router;
