import { useMutation } from "@tanstack/react-query";

export const useMutationAddRetailer = () => useMutation({
  mutationKey: ['retailer', 'list'],
  mutationFn: async(payload) => {
    const result = await fetch( 
      '/api/retailer', 
      { method: 'POST', headers: { 'Content-type': 'application/json'}, body: JSON.stringify(payload)})
      .then(res => res.json())
    return result;
  }
})