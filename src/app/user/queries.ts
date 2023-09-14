import { useMutation, useQuery } from "@tanstack/react-query";
import cookie from 'cookie-cutter'

export type UserType = {
  username: string;
  id: string;
};

export const useQueryUser = () =>
  useQuery<UserType>({
    queryKey: ["user"],
    queryFn: async () => {
      //check if exists in cookies.
      const token = cookie.get('token')
      if(token) {
        const u = JSON.parse(token)
        if(u.username && u.id) return u
      }
      const result = await fetch("/api/user").then((res) => res.json());
      return result;
    },
  });

export const useMutationSignout = () => useQuery({
  queryKey: ["user-logout"],
  queryFn: async() => {
    const result = await fetch("/api/user", { method: 'DELETE' }).then(res => res.json())
    return result;
  }
})
