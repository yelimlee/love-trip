import { auth } from '@/remote/firebase'
import { userAtom } from '@/store/atom/user'
import { onAuthStateChanged } from 'firebase/auth'
import { useSetAtom } from 'jotai'
import React, { useState } from 'react'

function AuthGuard({ children }: { children: React.ReactNode }) {
  const [initialize, setInitialize] = useState<boolean>(false) // 인증이 되었는지 안되었는지
  const setUser = useSetAtom(userAtom)

  onAuthStateChanged(auth, (user) => {
    console.log(user)

    if (user == null) {
      setUser(null)
    } else {
      setUser({
        uid: user.uid,
        email: user.email as string,
        dispalyName: user.displayName ?? '',
        phooURL: user.photoURL ?? '',
      })
    }
    setInitialize(true)
  })
  // 인증이 안된경우 아무것도 보여주지 않기
  if (initialize === false) {
    return null
  }
  return <>{children}</>
}
export default AuthGuard
