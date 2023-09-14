import { useMutation, useQuery } from "@tanstack/react-query";
import { WineType } from "../wine/queries";
import { UserType } from "../user/queries";

export type TastingType = {
  id?: string;
  acidity?: string;
  alcohol?: string;
  body?: string;
  clarity?: string;
  color?: string;
  condition?: string;
  development?: string;
  finish?: string;
  flavorIntensity?: string;
  appearanceIntensity?: string;
  noseIntensity?: string;
  quality?: string;
  readiness?: string;
  sweetness?: string;
  tannin?: string;
  appearanceNotes?: string;
  aromaDescription?: string;
  flavorCharacteristics?: string;
  otherCharacteristics?: string;
  location?: string;
  wineId?: string;
  reviewerId?: string;
  wine?: WineType;
  reviewer?: UserType;
};

export const useQueryTastings = () =>
  useQuery<TastingType[]>({
    queryKey: ['tastings', 'list'],
    queryFn: async () => {
        const result = await fetch('/api/tasting').then( res => res.json())
        return result
    }
  })

export const useMutationAddTasting = () => useMutation({
  mutationKey: ['tasting', 'list'],
  mutationFn: async(payload) => {
    const result = await fetch( 
      '/api/tasting', 
      { method: 'POST', headers: { 'Content-type': 'application/json'}, body: JSON.stringify(payload)})
      .then(res => res.json())
    return result;
  }
})

export const useMutationDeleteTasting = () => useMutation({
  mutationKey: ['tasting', 'list'],
  mutationFn: async(id: string) => {
    const result = await fetch( 
      `/api/tasting/${id}`, 
      { method: 'DELETE', headers: { 'Content-type': 'application/json'}})
      .then(res => res.json())
    return result;
  }
})