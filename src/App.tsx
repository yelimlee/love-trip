import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HotelListPage from '@pages/HotelList'
import TestPage from '@pages/Test'
import HotelPage from './pages/Hotel'

function App() {
  const shirt = {
    name: '멋쟁이 셔츠',
    price: 1000,
    colors: ['white', 'black'],
  }

  // const tShirt = Object.assign({}, shirt)
  const tShirt = { ...shirt }
  tShirt.colors[0] = 'orange'
  console.log(shirt)
  console.log(tShirt)

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
