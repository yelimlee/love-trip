import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HotelListPage from '@pages/HotelList'
import TestPage from '@pages/Test'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelListPage />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
