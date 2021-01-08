import React from 'react';
import { goToLoginPage,goToRegister } from '../Routes/Cordinator';
import {useHistory}from 'react-router-dom';
import * as S from '../Components/StyledGeral'
import Header from '../Components/Header/Header'

function HomePage() {

    const history=useHistory();

  return (
    <div>
 <Header/>
   
  <S.Container>

<h3>Você é novo na area?</h3>
<S.ButtonRegister onClick={()=>goToRegister(history)}>Cadastrar</S.ButtonRegister>

<h3>Já virou freguês?</h3>
<S.ButtonEnter onClick={()=>goToLoginPage(history)} >Login</S.ButtonEnter>
</S.Container>

</div>

  )
}

export default HomePage;