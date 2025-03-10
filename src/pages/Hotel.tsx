import Carousel from '@/components/hotel/Caraousel'
import Contents from '@/components/hotel/Contents'
import useHotel from '@/components/hotel/hooks/useHotels'
import Top from '@/components/shared/Top'
import { useParams } from 'react-router-dom'

function HotelPage() {
  const { id } = useParams() as { id: string }
  const { isLoading, data } = useHotel({ id })

  if (data == null || isLoading) {
    return <div>Loading...</div>
  }

  const { name, comment, images, contents } = data

  return (
    <div>
      <Top title={name} subTitle={comment} />
      <Carousel images={images} />
      <Contents contents={contents} />
    </div>
  )
}

export default HotelPage
