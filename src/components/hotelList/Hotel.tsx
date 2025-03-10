import { Hotel as IHotel } from '@/models/hotel'
import addDelimiter from '@/utils/addDelimiter'
import formatTime from '@/utils/formatTimes'
import { css } from '@emotion/react'
import ListRow from '@shared/ListRow'
import { differenceInMilliseconds, parseISO } from 'date-fns'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Flex from '../shared/Flex'
import Spacing from '../shared/Spacing'
import Tag from '../shared/Tag'
import Text from '../shared/Text'

function Hotel({ hotel }: { hotel: IHotel }) {
  const [remainedTime, setRemainedTime] = useState(0)

  useEffect(() => {
    if (hotel.events == null || hotel.events.promoEndTime == null) {
      return
    }

    const promoEndTime = hotel.events.promoEndTime
    // 이벤트가 진행중인경우만 인터벌 돌리기
    const timer = setInterval(() => {
      // 일초마다 프로모션 남은 시간 계산
      const 남은초 = differenceInMilliseconds(
        parseISO(promoEndTime),
        new Date(),
      )

      if (남은초 < 0) {
        clearInterval(timer)
      }
      setRemainedTime(남은초)
    }, 1_000)

    // 컴포넌트가 언마운트될때 인터벌 종료
    return () => {
      clearInterval(timer)
    }
  }, [hotel.events])

  const tagComponent = () => {
    if (hotel.events == null) {
      return null
    }
    const { name, tagThemeStyle } = hotel.events
    const promotionTxt =
      remainedTime > 0 ? `-${formatTime(remainedTime)}남음` : ''

    // 핫딜인 경우
    return (
      <div>
        <Tag
          color={tagThemeStyle.fontColor}
          backgroundColor={tagThemeStyle.backgroundColor}
        >
          {name.concat(promotionTxt)}
        </Tag>
        <Spacing size={8} />
      </div>
    )
  }
  return (
    <div>
      <Link to={`/hotel/${hotel.id}`}>
        <ListRow
          contents={
            <Flex direction="column">
              {tagComponent()}
              <ListRow.Texts
                title={hotel.name}
                subTitle={hotel.comment}
              ></ListRow.Texts>
              <Spacing size={4} />
              <Text typography="t7" color="gray600">
                {hotel.starRating}성급
              </Text>
            </Flex>
          }
          right={
            <Flex direction="column" align="flex-end">
              <img css={imageStyles} src={hotel.mainImageUrl} alt="" />
              <Spacing size={8} />
              <Text bold={true}>{addDelimiter(hotel.price)}원</Text>
            </Flex>
          }
          style={containerStyles}
        />
      </Link>
    </div>
  )
}

const containerStyles = css`
  align-items: flex-start;
`

const imageStyles = css`
  width: 90px;
  height: 110px;
  border-radius: 8px;
  object-fit: cover;
  margin-left: 16px;
`

export default Hotel
