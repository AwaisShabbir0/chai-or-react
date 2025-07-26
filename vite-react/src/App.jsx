import { useState } from 'react'
import Chai from './chai.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Chai or React</h1>
    <Chai />
    </>
  )
}

export default App
