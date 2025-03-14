import { COLLECTIONS } from '@/constants'
import { store } from '@/remote/firebase'
import { collection, getDocs, writeBatch } from 'firebase/firestore'
import Button from '../shared/Button'

function RecommendHotelButton() {
  const handleButtonClick = async () => {
    // 1. 전체 호텔 가져오기
    // 2. 전체 호텔 루프
    // 3. 호텔 + 추천호텔 아이디 5개 추가
    const batch = writeBatch(store)
    const snapshot = await getDocs(collection(store, COLLECTIONS.HOTEL))
    snapshot.docs.forEach((hotel) => {
      const 추천호텔리스트 = []
      for (let doc of snapshot.docs) {
        if (추천호텔리스트.length === 5) {
          break
        }
        if (doc.id !== hotel.id) {
          추천호텔리스트.push(doc.id)
        }
      }
      batch.update(hotel.ref, {
        recommendHotels: 추천호텔리스트,
      })
    })
    await batch.commit()
  }
  return <Button onClick={handleButtonClick}>추천호텔 데이터 추가하기</Button>
}

export default RecommendHotelButton
