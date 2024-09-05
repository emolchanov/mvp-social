import ky from 'ky';

export const request = ky.create({
  credentials: 'include',
  prefixUrl: '',
  retry: 0,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});
