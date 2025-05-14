import Message from './Message'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const messageText = "Привет, мир!";
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      {messageText}
      </div>
    </>
  )
}

export default App
