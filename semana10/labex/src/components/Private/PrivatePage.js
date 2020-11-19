import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Header from '../Header'

 const PrivatePage = () => {
  const history = useHistory();

  const goToCreateTrip = () => {
    history.push('/CreateTrip')
  };
  const goToDetailTrip = () => {
    history.push("/DetailTrip")
  };
  const goToListTrip = () => {
    history.push("/ListTrip")
  };
  const goToHomePage = () => {
    history.push("/")
  };

  const Container=styled.div`
  background-color:white;
  width: 100vw;
  height: 100vh;
    `;
    
  const Conteudo =styled.div` 
  color:purple;
  text-align:center;
  font-size:20px;
  `;
  const ButtonTrip =styled.button` 
  background-color: #f4ecf4;
  border: 1px solid blueviolet;
  border-radius:5px;
  color: blueviolet;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  padding:5px;
  cursor: pointer;
  &:hover {
  background-color:blueviolet;
  color:white;
  }`;

  return(
<Container>
    <Header/>
<Conteudo>
<p>Vamos marcar uma viagem?</p>
<ButtonTrip onClick={goToCreateTrip}>Criar Viagem</ButtonTrip>
<p>Vamos espiar as viagens marcadas?</p>
<ButtonTrip onClick={goToListTrip}>Listar Viagem</ButtonTrip>
<p>Quer mais detalhes sobre as viagens?</p>
<ButtonTrip onClick={goToDetailTrip}>Detalhes das Viagens</ButtonTrip>
<p>Página Inicial? Não vá embora sem criar sua viagem combinado?</p>
<ButtonTrip onClick={goToHomePage}>Retornar</ButtonTrip>
</Conteudo>
    
   </Container>
  )

}
export default PrivatePage;