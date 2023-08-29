import { getIssues } from '@/apis/api';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    getIssues();
  }, []);
  return <div></div>;
};
