import { useState } from 'react'
import { Header } from './Header'
import './App.css'
import { TypeText } from './TypeText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <TypeText />
    </div>
  )
}

export default App
