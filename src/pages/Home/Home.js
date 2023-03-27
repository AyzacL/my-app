import React, { useState } from "react";
import Form from "../Formulario/Form";

import {logo,pantera,unedl} from '../../assets/img/imagenes'

import "./Home.css";

  const Home = () => {
    const [search, setSearch] = useState('');
    const [form, setForm] = useState(false);
    
    return (
      <form onSubmit={ev =>{
        ev.preventDefault();
        setSearch(ev.target.search.value);
        setForm(true)
      }}
      >
        <div className='Nav1'>
          <nav>
            <div className='unedl'>
              <img src={unedl}/>
            </div>
            
            <h1 className="Navbar-logo">Servicio UNEDL</h1>
            <ul>
              <li>
                <a href="login" class="btn1"> Salir</a>
              </li>
            </ul>
          </nav>
        </div>  

        <div class="contenedor">
          <div class="form-control" name='search'>
            <label for="role" id="label-role">
              Carrera
            </label>
            
            <select name="search" id="role">
                <option value="Software">Ingenieria </option>
                <option value="Derecho">Other</option>
            </select>
          </div>

          <div class="form-grado" name='search'>
            <label for="role" id="label-role">
              Grado
            </label>
            
            <select name="search" id="grado">
                <option value="8°">8vo </option>
                <option value="7°">7mo</option>
            </select>
          </div>

          <div class="form-turno" name='search'>
            <label for="role" id="label-role">
              Turno
            </label>
            
            <select name="search" id="turno">
                <option value="M">Matutino </option>
                <option value="N">Nocturno</option>
            </select>
          </div>

        </div>
        
        <button type='submit' className="buton">Buscar</button>
        {form ? <Form/> : null}
          
      </form>
    );
  
  }

export default Home; 