import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";

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
OLA SOU A PAGINA DE TESTE PRIVADA e MINHAS OPCOES SÃO

</Titulo>
    <ButtonStyle>
   <button onClick={goToCreateTrip}>Create Trip</button>
   <button onClick={goToListTrip}>List Trip</button>
   <button onClick={goToDetailTrip}>Detail Trip</button>
   </ButtonStyle>

   </Container>
  )

}
export default PrivatePage;