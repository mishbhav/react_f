
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

    const [cart, setCart] = useState([]);
    useEffect(() => {
        axios.get('/api/cart-items?expand=product')
            .then((response) => {
                setCart(response.data);
            });
    }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart}/>} />
      <Route path="orders" element={<Orders cart={cart}/>} />
      <Route path="tracking" element={<Tracking cart={cart} />} />
    </Routes>
  )
}

export default App