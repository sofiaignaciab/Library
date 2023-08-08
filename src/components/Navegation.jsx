import React from "react";
//import { ReactDOM } from "react-dom/client";

export const Nagevation = () => {
    return(
        <div className='topnav'>
            <a className="active" href="#home">Home</a>
            <a href="#masvendidos">Mas vendidos</a>
            <a href="#juegosymas">Juegos y accesorios</a>
        </div>
    );
}