import { COLLECTIONS } from '@/constants'
import { Room } from '@/models/room'
import { store } from '@/remote/firebase'
import { getRooms } from '@/remote/room'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import { useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'

function useRooms({ hotelId }: { hotelId: string }) {
  // useQueryClient : 캐싱된 데이터를 갱신할때 사용 (실시간)
  const client = useQueryClient()

  useEffect(() => {
    // onSnapshot : 데이터 실시간 추적
    // snapshot을 가지고 변경된 데이터를 다시 업데이트 시켜주면 된다
    const unsubscribe = onSnapshot(
      collection(doc(store, COLLECTIONS.HOTEL, hotelId), COLLECTIONS.ROOM),
      (snapshot) => {
        const newRooms = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Room),
        }))
        client.setQueriesData(['rooms', hotelId], newRooms)
      },
    )
    return () => {
      unsubscribe()
    }
  }, [hotelId, client])
  return useQuery(['rooms', hotelId], () => getRooms(hotelId))
}

export default useRooms
