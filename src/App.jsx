import { useState } from 'react'
import { Header } from './Header'
import './App.css'
import { MainTestArea } from './MainTestArea'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <MainTestArea />            
    </div>
  )
}

export default App
