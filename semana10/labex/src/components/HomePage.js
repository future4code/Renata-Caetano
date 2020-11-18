import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Header from './Header'

 const HomePage = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.push('/Login')
  };
  const goToPublicPage = () => {
    history.push("/PublicPage")
  };

  const Container=styled.div`
  display:flex;
  justify-content:space-around;
  flex-direction:column;
  background-color:white;
  width: 100vw;
  height: 100vh;
    `;

  const ButtonPublic = styled.button`
 background-color: blueviolet;
  border: 1px solid blueviolet;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  padding:20px;
  justify-content:space-around;
  cursor: pointer;
  &:hover {
  background-color:#f4ecf4;
  color:purple;
  }`;

const ButtonAdm = styled.button`
 background-color: blueviolet;
  border: 1px solid blueviolet;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  padding:20px;
  cursor: pointer;
  &:hover {
  background-color:#f4ecf4;
  color:purple;
  } `;
  
   return(

   <Container>
  <Header/>
   <ButtonPublic onClick={goToPublicPage}> QUERO ME CANDIDATAR</ButtonPublic>
   <ButtonAdm onClick={goToLogin}>ÁREA DO ADMINISTRADOR</ButtonAdm>
   </Container>
 );
}
export default HomePage;