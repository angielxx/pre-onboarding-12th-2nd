import { createBrowserRouter } from 'react-router-dom';

import { Home, Issue, Root } from '@/pages';
import { issueLoader } from '@/utils/loader';
import { IssueListProvider } from '@/context/IssueListProvider';
const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '',
        element: (
          <IssueListProvider>
            <Home />
          </IssueListProvider>
        ),
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
