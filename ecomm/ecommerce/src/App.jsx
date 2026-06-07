
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPages'
import { Orders } from './pages/orders/Orders'
import { Tracking } from './pages/orders/Tracking'
import './App.css'
import { Routes, Route } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  //const [count, setCount] = useState(0)
const loadCart = async () => {
        const response = await axios.get('/api/cart-items?expand=product');
                setCart(response.data);
      }
    const [cart, setCart] = useState([]);
    useEffect(() => {
      loadCart();
    }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="orders" element={<Orders cart={cart}/>} />
      <Route path="tracking" element={<Tracking cart={cart} />} />
    </Routes>
  )
}

export default App