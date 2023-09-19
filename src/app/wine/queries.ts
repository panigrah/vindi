import { useMutation, useQuery } from "@tanstack/react-query";
import { ImageType } from "./image-upload";

export type WineType = {
  name: string;
  appelation: string;
  description: string;
  variety?: string;
  vintage?: number;
  id?: string;
  media?: string[];
  images?: ImageType[]
};

export const useQueryWines = () =>
  useQuery<WineType[]>({
    queryKey: ["wine", "list"],
    queryFn: async () => {
      const result = await fetch("/api/wine").then((res) => res.json());
      return result;
    },
  });

  export const useMutationAddWine = () => useMutation({
    mutationKey: ['wine', 'list'],
    mutationFn: async(payload) => {
      const result = await fetch( 
        '/api/wine', 
        { method: 'POST', headers: { 'Content-type': 'application/json'}, body: JSON.stringify(payload)})
        .then(res => res.json())
      return result;
    }
  })
  