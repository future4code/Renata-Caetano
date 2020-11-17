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
  background-color:white;
  width: 100vw;
  height: 100vh;
 
   `;

  const Titulo =styled.h3` 
  color:blueviolet;
  text-align:center;
  `;
  const ButtonStyle =styled.div` 
  display :flex;
  flex-direction:row;
  justify-content:center;
  padding:100px;
  `;

  


 return(
   <Container>
    <Titulo>
    <h3>HOME PAGE</h3>
    </Titulo>
    <ButtonStyle>
   <button onClick={goToPrivatePage}>Formulario de aplicação</button>
   <button onClick={goToLogin}>Login Administrativo</button>
   </ButtonStyle>


   </Container>
 );
}
export default HomePage;