import { getRecommenHotels } from '@/remote/hotel'
import { useQuery } from 'react-query'

const useRecommendHotels = ({ hotelIds }: { hotelIds: string[] }) => {
  return useQuery(
    ['recommendHotels', JSON.stringify(hotelIds)],
    () => getRecommenHotels(hotelIds),
    {
      enabled: hotelIds.length > 0,
    },
  )
}

export default useRecommendHotels
