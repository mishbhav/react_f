
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPages'
import { Orders } from './pages/Orders'
import { Tracking } from './pages/Tracking'
import './App.css'
import { Routes, Route } from 'react-router'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<Orders />} />
      <Route path="tracking" element={<Tracking />} />
    </Routes>
  )
}

export default App