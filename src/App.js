import React,{useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Comp/Home'
import Loadscreen1 from './Comp/Loadscreen1'

const App = () => {
  const [name, setName] = useState("");
  // const navigate = useNavigate();
  // const Loadscreen = () => {
  //   navigate("/home")
  // };
  // setTimeout(() => {
  //   Loadscreen();
  // }, 9000);
  return (
    <div>
      {/* <img alt='sample' src='sample.png' height={"480px"} width="480px"/> */}
      <Routes>
        <Route exact path="/home" 
        element={<Home name={name}/>}/> 
        <Route exact path="/"
         element={<Loadscreen1 name={name} setName={setName}/>}/> 
      </Routes>
    </div>
  )
}

export default App