import { useMutation, useQuery } from "@tanstack/react-query";

export type UserType = {
  username: string;
  id: string;
};

export const useQueryUser = () =>
  useQuery<UserType>({
    queryKey: ["user"],
    queryFn: async () => {
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
