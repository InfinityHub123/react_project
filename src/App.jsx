import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Menu from './pages/Menu'
import OurStory from './pages/OurStory'
import Login from './pages/Login'
import ContactUs from './pages/ContactUs'
import CartPage from './pages/CartPage'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/about' element={<OurStory/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
