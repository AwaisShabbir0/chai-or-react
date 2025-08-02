import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) { 
      setCounter(counter + 1);
      console.log('Counter value:', counter + 1);
    }
  }
  const decrementValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log('Counter value:', counter - 1);
    }
    
  }

  return (
    <div className="counter-container">
      <h1>Chai or React</h1>
      <h3>Counter value: <span className="counter-value">{counter}</span></h3>
      <div className="button-group">
        <button className="counter-btn" onClick={addValue}>Increment</button>
        <button className="counter-btn" onClick={decrementValue}>Decrement</button>
        <button className="counter-btn reset" onClick={() => setCounter(0)}>Reset</button>
        <footer>Developed by Awais Shabbir</footer>
      </div>
    </div>
  )
}

export default App
