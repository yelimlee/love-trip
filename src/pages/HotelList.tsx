import useHotels from '@/components/hotelList/hooks/useHotels'
import HotelItem from '@/components/hotelList/HotelItem'
import Spacing from '@/components/shared/Spacing'
import Top from '@/components/shared/Top'
import { Fragment } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

function HotelListPage() {
  const { data: hotels, hasNextPage, loadMore } = useHotels()

  return (
    <div>
      <Top title="인기 호텔" subTitle="호텔부터 펜션까지 최저가" />
      <InfiniteScroll
        dataLength={hotels?.length ?? 0}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
        scrollThreshold="100px"
      >
        <ul style={{ padding: 0 }}>
          {hotels?.map((hotel, idx) => (
            <Fragment key={hotel.id}>
              <HotelItem hotel={hotel} />
              {idx !== hotels?.length - 1 && (
                <Spacing
                  size={8}
                  backgroundColor="gray100"
                  style={{ margin: '20px 0' }}
                />
              )}
            </Fragment>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  )
}

export default HotelListPage
