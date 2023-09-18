import { atom, useAtom } from 'jotai'
import type { PrimitiveAtom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

const storage = createJSONStorage(() => sessionStorage)

type UserType = {
  id?: string;
  username: string;
  email?: string;
  photo?: string;
}

export const userAtom = atom<UserType | null>(null)
export const tastingListAtom = atom<string[]>([])