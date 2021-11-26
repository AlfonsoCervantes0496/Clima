import react from "react";
import '../stilesComponents/Detail.css'

const DataRender=({dark, nombre,  tempmmax, tempmin, timezone})=>{

    <div className={dark?"detailB":"detailW"}>
    <h1>Nombre {nombre}</h1>

   <div className="sections">
       <div className="sectionOne">
       
       
       <h3>Temperatura-max {tempmmax}</h3>
       <h3>Temperatura-min {tempmin}</h3>
       </div>
       <div className="setionTwo">
           <h2>Zona Horaria {timezone}</h2>
           
           

       </div>

   </div>
   </div> 



}

export default DataRender