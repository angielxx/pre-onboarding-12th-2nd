import { toScrollFit } from '@/utils/toScrollFit';
import { useEffect, useState } from 'react';

export const useDetectScroll = () => {
  const [isEnd, setIsEnd] = useState(false);

  const detectIsEnd = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setIsEnd(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toScrollFit(detectIsEnd), {
      passive: true,
    });
    return () => window.removeEventListener('scroll', detectIsEnd);
  }, []);

  return { isEnd, setIsEnd };
};
