import { cookies } from 'next/headers';

export const getUser = async () => {
  const token = cookies().get('token')?.value;
  if (token) {
    const u = JSON.parse(token);
    if (u.id) {
      return u;
    }
  }
  return undefined;
};
