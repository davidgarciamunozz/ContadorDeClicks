import './App.css';
import './hojas-de-estilo/boton.css';
import {Boton} from './componentes/boton.jsx';
import { Contador } from './componentes/contador.jsx';
import logoIBM from './imagenes/ibm-logo.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);
  
  const manejarClick = () => {
    setNumClicks(numClicks + 1); 
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='ibm-logo-contenedor'>
       <img className='ibm-logo' src={logoIBM} alt='logo-IBM'/>
      </div>

      <div className='contenedor-contador'>
        <Contador numClicks={numClicks}/>
        <div className='contenedor-botones'>
        <Boton
        texto='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick}
        />
        <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
