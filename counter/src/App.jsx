import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count+1);
  }
  function decrement() {
    setCount(count > 0 ? count-1 : count);
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <div className="counter">{count}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default App
