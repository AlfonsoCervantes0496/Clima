

import logo from '../logo.svg'

import '../stilesComponents/Header.css'

//creacion de componente

const Header =({stado, changeDark})=>{
    


return(

<header className={stado?"b":"w"}>
    
<div className="title">
    <h1>API</h1>
<img src={logo} alt="" className="App-logo" />
<h1> clima</h1>

<ul>
    <li>Inicio</li>
    <li>jfjfjfj</li>
</ul>

</div>
<div className="darkMode">
    <h2>  * DarkMode </h2>
    <label className="switch">
  <input type="checkbox"
  onClick={()=>changeDark()}/>
  <div className="slider round"></div>
</label>

</div>

</header>

)

}
export default Header