import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HotelListPage from '@pages/HotelList'
import TestPage from '@pages/Test'
import HotelPage from './pages/Hotel'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelListPage />}></Route>
        <Route path="/hotel/:id" element={<HotelPage />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
