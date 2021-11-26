import React from 'react'
import ups from "../img/ups.jpg"
import "../stilesComponents/nf.css"

const Notfound = () => {
    return (
        <div>
            <section className="sec">
            <img className="img" src={ups} alt="" />
            </section>
            <p className="n404">404</p>
           <h1 className="t404">No Encontrado</h1>
           <h2> ups... No pudimos encontrar resultados relacionados a tu busqueda</h2>


            
        </div>
    )
}

export default Notfound
