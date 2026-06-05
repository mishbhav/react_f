
import { HomePage } from './pages/HomePage'
import './App.css'
import { Routes, Route } from 'react-router'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<div>test</div>} />
    </Routes>
  )
}

export default App
