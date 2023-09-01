import { octokit } from './config';

// List repository issues
export const getIssuesPerPage = async (page?: number) => {
  if (!page) page = 1;

  const { data } = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'facebook',
    repo: 'react',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
    state: 'open',
    sort: 'comments',
    per_page: 12,
    page: page,
  });

  return data;
};

// Get an issue
export const getIssueById = async (id: number) => {
  const { data } = await octokit.request(
    'GET /repos/{owner}/{repo}/issues/{issue_number}',
    {
      owner: 'facebook',
      repo: 'react',
      issue_number: id,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  );
  return data;
};
