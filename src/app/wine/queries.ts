import { useQuery } from "@tanstack/react-query";

export type WineType = {
  name: string;
  appelation: string;
  description: string;
  variety: string;
  year: number;
  id?: string;
  media?: string;
};

export const useQueryWines = () =>
  useQuery<WineType[]>({
    queryKey: ["wines"],
    queryFn: async () => {
      const result = await fetch("/api/wine").then((res) => res.json());
      return result;
    },
  });
