import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";


 const HomePage = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.push('/Login')
  };
  const goToPrivatePage = () => {
    history.push("/PrivatePage")
  };

  const Container=styled.div`
  background-color:pink;
  width: 100vw;
  height: 100vh;
  
  `;



 return(
   <Container>
     <div>
     <p>HOME PAGE</p>
     <button onClick={goToPrivatePage}>Formulario de aplicação</button>
     <button onClick={goToLogin}>Login Administrativo</button>
     </div>
   </Container>
 );
}
export default HomePage;