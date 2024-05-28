import React from "react";

export function Boton ({texto, esBotonDeClick, manejarClick}){
    return (
     <button className={esBotonDeClick ? 'boton-click': 'boton-reiniciar'} onClick={manejarClick}>
        {texto}
     </button>
    );
}