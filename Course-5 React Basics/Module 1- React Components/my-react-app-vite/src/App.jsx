import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainSection from './MainSection'
import SideBar from './SideBar'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Header name="jayanthi" color="red" />
    <div>
    <MainSection greeting="Hello" />
    <SideBar />
    </div>
    </div>
  )
}

export default App
