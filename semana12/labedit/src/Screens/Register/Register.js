import React from 'react';
import Header from '../../Components/Header/Header';
import {useHistory}from 'react-router-dom';
import{RegisterContainer,ButtonBack} from './styled';
import { goToLogin} from '../../Routes/Cordinator';
// import { Container } from './styles';

function Register() {
    const history=useHistory();
  return (
   <div>
   <Header/>
  <RegisterContainer>
TESTE SOU REGISTER
<ButtonBack onClick={()=>goToLogin(history)}>Voltar</ButtonBack>

</RegisterContainer>

  </div>

  )
}

export default Register;