'use client'
import { useMutationSignout } from "../queries"

export default function LogoutPage() {
  const logout = useMutationSignout()
  return(<>{logout.isLoading}{JSON.stringify(logout.data ?? {status: 'wait'})}</>)
}