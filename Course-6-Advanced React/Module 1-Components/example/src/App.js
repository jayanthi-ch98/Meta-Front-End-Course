import logo from './logo.svg';
import './App.css';
import MenuListMap from './Components/MenuListMap';
import ControlledComponent from './Components/ControlledComponent';
import FeedBackForm from './Components/FeedBackForm';
function App() {
  return (
    <div className="App">

    {/* using map to print a menu list menu  */}
    {/* <MenuListMap/> */}
    
    {/* using state for a controlled component  */}
    {/* <ControlledComponent/> */}

    {/* //creating a feedback form */}
    <FeedBackForm/>

    </div>
  );
}

export default App;
