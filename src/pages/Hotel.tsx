import Map from '@/components/hotel/\bMap'
import ActionButtons from '@/components/hotel/ActionButtons'
import Carousel from '@/components/hotel/Caraousel'
import Contents from '@/components/hotel/Contents'
import useHotel from '@/components/hotel/hooks/useHotel'
import RecommendHotels from '@/components/hotel/RecommendHotels'
import Rooms from '@/components/hotel/Rooms'
import Top from '@/components/shared/Top'
import { useParams } from 'react-router-dom'

function HotelPage() {
  const { id } = useParams() as { id: string }
  const { isLoading, data } = useHotel({ id })

  if (data == null || isLoading) {
    return <div>Loading...</div>
  }

  const { name, comment, images, contents, location, recommendHotels } = data

  return (
    <div>
      <Top title={name} subTitle={comment} />
      <Carousel images={images} />
      <ActionButtons hotel={data} />
      <Rooms hotelId={id} />
      <Contents contents={contents} />
      <Map location={location} />
      <RecommendHotels recommendHotels={recommendHotels} />
    </div>
  )
}

export default HotelPage
