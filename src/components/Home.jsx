
import { useState } from "react";
import { Link } from "react-router-dom";
 import frio from '../img/frio.jpg'
 import templado from '../img/templado.jpg'
 import calido from '../img/calido.jpg'


 import'../stilesComponents/Home.css'
const Home =({stado, result, array})=>{
    const[input,setinput]=useState("")
    
    

    


    return(
        <section className={stado?"black":"white"}>
            
        <h1>Busca el estado de clima de tu ciudad</h1>
        <input type="text"  onChange={(e)=>setinput(e.target.value)} />
        <Link to={"/Detail"}><button onClick={()=>array(input)}>Buscar</button></Link>
    
        <div className="deslizable">
        <ul>
            <li><img src={frio} alt="" /></li>
            <li><img src={templado} alt="" /></li>
            <li><img src={calido} alt="" /></li>
        </ul>
        </div>
        </section>

    )
}
export default Home