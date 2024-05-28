import React from "react";
import '../hojas-de-estilo/contador.css'

export function Contador({numClicks}) {
    return (
        <div className='contador'>
        {numClicks}
        </div>
    );
}