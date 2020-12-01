import React from 'react';
import Header from '../../Components/Header/Header';
import { goToFeedPage, goToRegister } from '../../Routes/Cordinator';
import {useHistory}from 'react-router-dom';
import{LoginContainer,ButtonEnter,ButtonRegister,Input}from './styled'

// import { Container } from './styles';

function LoginPage() {
    const history=useHistory();
  return (
 
   
  <LoginContainer>

<Input value='' placeholder ='Email'onChange={''}></Input>
<br></br>
<Input value='' placeholder = 'password' type='password'onChange={''}></Input>


<ButtonEnter onClick={()=>goToFeedPage(history)}>Entrar</ButtonEnter>
<ButtonRegister onClick={()=>goToRegister(history)}>Cadastrar</ButtonRegister>
 
</LoginContainer>

 

  )
}

export default LoginPage;