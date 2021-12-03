import "../stilesComponents/Detail.css"
import { Link } from "react-router-dom"
import Notfound from "./notfound"



const Detaill = ({stado, datainfo}) => {


const  array=[]
array.push(datainfo)
console.log(array)

  
//

if(datainfo.cod==="404"){

  return (
    <Notfound/>
   
  )}
  else{
    return(
      array.map(reader=>(
        <div className={stado?"detailB":"detailW"}>
        <h1>Nombre {reader.name}</h1>
    
       <div className="sections">
           <div className="sectionOne">
           <img src={`https://openweathermap.org/img/wn/${reader.weather[0].icon}@2x.png`} alt="" />
           <h3>Temperatura-max {reader.main.temp_max}</h3>
           <h3>Temperatura-min {reader.main.temp_min}</h3>
           </div>
           <div className="setionTwo">
             
               <h2>Zona Horaria {reader.timezone}</h2>
               <Link to={"/"}><button>Buscar</button></Link>
               
    
           </div>
    
       </div>
       </div>))
      
    )
  }




}

export default Detaill
