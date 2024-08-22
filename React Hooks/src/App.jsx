import { useState } from 'react'
import './App.scss'
import { Counter } from './components/Counter/Counter'
import { Greeting } from './components/Greeting/Greeting'
import { Main } from './components/Main/Main'
import { Modal } from './components/Modal/Modal'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen((prev) => !prev)
    console.log(isOpen);
  }

  return (
    <>
      <Counter />
      <Greeting />
      <Main>
        {isOpen ? <Modal><h3>Hello from the modal</h3></Modal> : null}
        <button onClick={handleModal}>Show / Hide Modal</button>
      </Main>
    </>
  )
}

export default App
