import { useState } from 'react'
import './App.scss'
import { Counter } from './components/Counter/Counter'
import { Greeting } from './components/Greeting/Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <Greeting />
    </>
  )
}

export default App
