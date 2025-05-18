import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HotelListPage from '@pages/HotelList'
import TestPage from '@pages/Test'
import HotelPage from './pages/Hotel'
import useLoadKakao from './hooks/useLoadKakao'
import SigninPage from './pages/Signin'
import MyPage from './pages/My'
import AuthGuard from './components/auth/AuthGuard'
import Navbar from './components/shared/Navbar'

function App() {
  useLoadKakao()
  return (
    <BrowserRouter>
      <AuthGuard>
        <Navbar />
        <Routes>
          <Route path="/" element={<HotelListPage />}></Route>
          <Route path="/hotel/:id" element={<HotelPage />}></Route>
          <Route path="/my" element={<MyPage />}></Route>
          <Route path="/signin" element={<SigninPage />}></Route>
          <Route path="/test" element={<TestPage />}></Route>
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  )
}
export default App
