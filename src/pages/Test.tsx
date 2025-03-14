import HotelListAddButton from '@/components/test/HotelListAddButton'
import RecommendHotelButton from '@/components/test/RecommendHotelButton'

// 호텔 추가 버튼을 누르면 호텔 임시 데이터를 만들어서 파이어베이스에 저장
function TestPage() {
  return (
    <div>
      <HotelListAddButton />
      <RecommendHotelButton />
    </div>
  )
}

export default TestPage
