import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MealsProvider from './providers/MealsProvider'
import MealsList from './Components/MealsList'
import Counter from './components/Counter'
import {Routes,Link,Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import Contactus from './components/Contactus'
import Aboutus from './components/Aboutus'
import ConditionalComponent from './components/ConditionalComponent'
import SwitchConditionalRendering from './components/SwitchConditionalRendering'


function App() {

  return (
  

    // code for  hook
    //  is being used

    // <MealsProvider>
    //   <MealsList/>
    //   <Counter/>
    // </MealsProvider>
      
  //code for useRedux hook



  //code to use React-Router
    <>
    <nav>
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/about-us" className="nav-item">About us</Link>
      <Link to="/contact-us" className="nav-item">Contact us</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about-us" element={<Aboutus/>}/>
      <Route path="/contact-us" element={<Contactus/>}/>
    </Routes>

    <ConditionalComponent/>

    <SwitchConditionalRendering/>
    </>
    
  )
}

export default App
