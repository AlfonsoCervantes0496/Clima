import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/Home';
import Detaill from './components/Detaill';


function App() {

  const [stado,Setestado]=useState(false)
  const[elementResult,SetElementResult]=useState([])
 
  //funcion para cambiar el modo dark
  const ChangeMode=()=>{
    Setestado(!stado)

  }
  const getData=async(array)=>{
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+array+"&appid=0d49f183f767ddd4588898ac7fb57f23")
    const result = await response.json()
    
    SetElementResult(result)
    
  }
  


  return (
    <div>

    <Header stado={stado} changeDark={ChangeMode}/>
    <BrowserRouter>

    <Routes>
      <Route path="/" exact element={<Home stado={stado} array={getData}/>}/>
      <Route path="/Detail" element={<Detaill stado={stado} datainfo={elementResult}/>}/>
    
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
