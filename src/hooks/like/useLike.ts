import { useAlertContext } from '@/contexts/AlertContext'
import { Hotel } from '@/models/hotel'
import { getLikes, toggleLike } from '@/remote/like'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import useUser from '../auth/useUser'

function useLike() {
  const navigate = useNavigate()
  const user = useUser()
  const { open } = useAlertContext()
  const { data } = useQuery(
    ['likes'],
    () => getLikes({ userId: user?.uid as string }),
    {
      enabled: user != null,
    },
  )
  const client = useQueryClient()

  const { mutate } = useMutation(
    ({ hotel }: { hotel: Pick<Hotel, 'name' | 'id' | 'mainImageUrl'> }) => {
      if (user == null) {
        throw new Error('로그인필요')
      }
      return toggleLike({ hotel, userId: user.uid })
    },
    {
      onSuccess: () => {
        client.invalidateQueries(['likes'])
      },
      onError: (e: Error) => {
        if (e.message === '로그인필요') {
          open({
            title: '로그인이 필요한 기능입니다',
            onButtonClick: () => {
              navigate('/signin')
            },
          })
          return
        } else {
          open({
            title: '알 수없는 에러가 발생했습니다. 잠시 후 다시 시도해주세요',
            onButtonClick: () => {},
          })
        }
      },
    },
  )
  return { data, mutate }
}

export default useLike
