import React from 'react';
import {Link} from 'react-router-dom';

import {logo,pantera,unedl} from '../assets/img/imagenes'

import "./inicio.css"

const Inicio = () => {

  return(
    <>    
    <div className='Nav1'>
      <nav>
        <div className='unedl'>
          <img src={unedl}/>
        </div>
        
        <h1 className="Navbar-logo">Servicio UNEDL</h1>
        <ul>
          <li>
            <a href="login" class="btn1"> Login</a>
          </li>
          <li>
            <a href="#" class="btn1"> Info</a>
          </li>
        </ul>
      </nav>
    </div>  


    <div className='bajo'>

      <div className="caja">
        <div className='texto'>
          <h1>Inicio</h1>
          <hr></hr>
          <p>
            Sistema de Información y Administración de la Red Universitaria
          </p>
          <p>
            Evaluacion docenten de la carrera Ingenieria en software.
            lleva tus observaciones y expresa libremente tu aponion.
          </p>
        </div>
      </div>
      
      <div className='pet'>
        <img src={pantera}/>
      </div>
      
    </div>
   
    </>
  )

}


export default Inicio;
