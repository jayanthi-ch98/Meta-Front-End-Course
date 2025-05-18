import logo from './logo.svg';
import './App.css';
import LiveOrders from './components/LiveOrders';
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from 'react';


const Button =({backgroundColor,children})=>{
return(
  <button style={{
        backgroundColor,
      }}>{children}</button>
)
}

const Deletebutton =()=>{
  return(
  <Button backgroundColor='red'>Delete</Button>
  )
}
const ModalWindow=({children})=>{
    return(
      <>
      <div className="Overlay"></div>
      <div className="Alert">{children}</div>
      </>
    )
}
function App() {
     const [selected, setSelected] = useState("");

  return (
  //   <ModalWindow>
  //     <h1>Are you sure you want to delete your account </h1>
  //     <p>Once Deleted your data is lost</p>
  //     <Deletebutton/>
  //   </ModalWindow>
  // );
  // <LiveOrders/>
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
  
}

export default App;
