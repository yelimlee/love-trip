import { userAtom } from '@/store/atom/user'
import { useAtomValue } from 'jotai'

function useUser() {
  return useAtomValue(userAtom)
}

export default useUser
