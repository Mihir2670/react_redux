import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clickme from './component/button'
import Circle from './component/count'


function App() {
  const [count, setCount] = useState(0)
  
  const dissplay = () => setCount((count) => count + 1)
  const decrease = () => setCount((new_count) => new_count - 1)
  return (
    <>
      <Clickme plus={dissplay} minus={decrease}/>
      <Circle value={count} value2={new_count}/>
      
      
    </>
  )
}

export default App
