import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
import ModeHandler from './components/ModeHandler'
import Form from './components/Form'
import React from 'react'
import ReactPlayer from 'react-player'

function App() {
  const [count, setCount] = useState(0)
  const image="https://picsum.photos/id/237/250"
  const video="https://www.youtube.com/watch?v=WlqoPe8-Wi0&list=PLqX4M0x0p9cnPwKtIT3ghqYYiqD8uludA"
  const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");

  const playAudio = () => {
    if(audio.paused)
    audio.play();
  else{
    audio.pause();
  }
  };

  return (
    <>
      {/* <Button/>
      <ModeHandler/> */}
      {/* <Form/> */}
      <h1>importing image using image at the top</h1>
      <img src={viteLogo} height="240" width="240" alt="vite Logo"/>

      <h1>importing image using require</h1>
      <img src={reactLogo}height="240" width="240" alt="react logo"/>

      <h1>using image from internet</h1>
      <img src={image} height="240" width="240" alt="vite Logo"/>


      <ReactPlayer url={video} loading="lazy" playing={false} volume={0.5}/>
      
      <button onClick={playAudio}>Play Audio</button>

    </>
  )
}

export default App
