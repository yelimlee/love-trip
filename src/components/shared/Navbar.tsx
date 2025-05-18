import useUser from '@/hooks/auth/useUser'
import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
import Flex from './Flex'

function Navbar() {
  const location = useLocation()
  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false
  const user = useUser()
  console.log('유저 정보', user)

  const renderButton = useCallback(() => {
    if (user != null) {
      return (
        <Link to="/my">
          <img
            src={
              user.phooURL ??
              'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
            }
            alt=""
            width={40}
            height={40}
            style={{ borderRadius: '40%' }}
          />
        </Link>
      )
    }
    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button>로그인/회원가입</Button>
        </Link>
      )
    }
    return null
  }, [user, showSignButton])

  return (
    <Flex
      justify={'space-between'}
      align={'center'}
      css={navbarContainerStyels}
    >
      <Link to="/">Love Trip</Link>
      {/* 특정페이지에서만 showSignButton 노출 */}
      {renderButton()}
    </Flex>
  )
}

const navbarContainerStyels = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.gray};
`

export default Navbar
