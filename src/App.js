// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter } from "react-router-dom";
import Eventhandledemo1 from "./EVENTHANDLEING/eventhandledemo1";
import Hooksdemo2 from "./Hooks/hooksdemo2";
import Navbar from "./NAVBAR/navbar";
import Testclass1 from "./PROPS/testclass1";
import Testfunction1 from "./PROPS/testfunction1";
import DemoState1 from "./States/DemoState1";
import Conditionaldemo1 from "./conditionalrendering/conditionaldemo1";
import Conditionaldemo2 from "./conditionalrendering/conditionaldemo2";
import DEMOCLASS from "./kinds/DEMOCLASS";
import DEMOFUN from "./kinds/DEMOFUN";
import DemoMUI1 from "./MUI/DemoMUI1";

function App() {
  const location = "VIZAG"
  const students ={ "id":101, "name":"SAI"}
  const products = ["ADHURS","TEMPER","ASVR"]
  return (
    <div className="App">
      <h3> React Learn APP</h3>
      <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
      <DemoMUI1/>

      <DEMOCLASS/>
      <DEMOFUN/>
      {/* props */}
      <Testclass1 location={location} name="RAMA"   />
      <Testfunction1  students={students} products={products} />
      {/* State Objects */}
      <DemoState1/>
      {/* Hooks demo */}
      <Hooksdemo2/>

      <Conditionaldemo1/>
      <Conditionaldemo2/>

      <Eventhandledemo1/>
    </div>
  );
}

export default App;
