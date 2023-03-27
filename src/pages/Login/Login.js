import React, { useState } from 'react';
import './Login.css';
import Title from './components/Title/Title.jsx';
import Label from './components/Label/Label.jsx';
import Input from './components/input/Input.jsx';
import {useNavigate} from 'react-router-dom';


const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [ passwordError, setPasswordError] = useState(false);
    const [ isLogin, setIsLogin ] = useState(false);
    const [hasError, setHasError] = useState(false);
    const history = useNavigate();

    function handleChange(name, value) {
        if(name === 'usuario'){
            setUser(value)
        } else {
          if(value.length < 5){
            setPasswordError(true);
          }else {
            setPasswordError(false);
              setPassword(value);
              setHasError(false);
          }
        }
    };

    function ifMatch(param){
      if(param.user.length > 0 && param.password.length > 0){
        if(param.user === 'ayzac' && param.password === "54321"){
          const { user, password } = param;
          let ac = { user, password };
          let account = JSON.stringify(ac);
          localStorage.setItem('account', account);
          setIsLogin(true);
        }else {
          setIsLogin(false);
          setHasError(true);
        }
      }else {
        setIsLogin(false);
        setHasError(true);
      }
    }

    function handleSubmit(){
        let account = {user, password}
        if(account) {
            ifMatch(account);
            history("/home");
        }
    };


    return(
        
        <div className='containter-v1'>
          <div className='nav'>

          </div>


          <div className='conte'>

            <div className='element2'>
              <div className='left'>
                <div className='Welcome'>
                  Welcome
                </div>

                <div className='texto'>
                  Alumnos UNEDL bienvenidos a 
                  <br />
                  la evaluacion docente.
                </div>
              </div>
            </div>          

            <div className='element1'>
              <div className='login-container'>
                <Title text='Login' />
                <Label text='Usuario'/>
                <Input
                attribute={{
                      id: 'usuario',
                      name: 'usuario',
                      type: 'text',
                      placeholder: 'Ingresa su usuario'
                  }}
                  handleChange={ handleChange }
                />

                <Label text='Contraseña'/>
                <Input
                attribute={{
                      id: 'contraseña',
                      name: 'contraseña',
                      type: 'password',
                      placeholder: 'Ingresa su contraseña'
                  }}
                  handleChange={ handleChange }
                  param = {passwordError}
                />

                <button onClick={ handleSubmit}>
                    Ingresar
                </button>

              </div>
            </div>
          </div>
        </div>
    
    )
};

export default Login;
