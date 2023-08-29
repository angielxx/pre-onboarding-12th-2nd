import { octokit } from './config';

export const getIssues = async () => {
  const response = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'facebook',
    repo: 'react',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
    state: 'open',
    sort: 'comments',
  });
  console.log(response);
  return response;
};
