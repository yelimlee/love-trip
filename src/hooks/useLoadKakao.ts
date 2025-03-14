import { useEffect } from 'react'
declare global {
  interface Window {
    Kakao: any
  }
}
function useLoadKakao() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js'
    script.async = true // 비동기 호출
    document.head.appendChild(script)
    script.onload = () => {
      // 초기화가 되어있지 않은경우 카카오톡 초기화
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY)
      }
    }
  }, [])
}

export default useLoadKakao
