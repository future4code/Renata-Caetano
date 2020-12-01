import React from 'react';
import Header from '../../Components/Header/Header';
import {useHistory}from 'react-router-dom';
import{FeedContainer,ButtonBack} from './styled'
import { goToLogin} from '../../Routes/Cordinator';
// import { Container } from './styles';

function FeedPage() {
    const history=useHistory();
  return (
   <div>
   <Header/>
  <FeedContainer>
TESTE SOU FEED
<ButtonBack onClick={()=>goToLogin(history)}>Voltar</ButtonBack>


</FeedContainer>

  </div>

  )
}

export default FeedPage;