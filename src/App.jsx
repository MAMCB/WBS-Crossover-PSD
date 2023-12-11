import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from "./components/footer"
import BottomSection2 from './components/BottomSection2'
import BottomSection1 from './components/BottomSection1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BottomSection1 />
      <BottomSection2 />
      <Footer />
    </>
  )
}

export default App
