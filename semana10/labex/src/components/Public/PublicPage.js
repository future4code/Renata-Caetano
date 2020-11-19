import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useProtectPage from '../Hooks/UseProtectPage';
import Header from '../Header';
import { useHistory } from "react-router-dom";
import HomePage from '../HomePage';
import FormPage from '../Public/FormPage';

const Container=styled.div`
background-color:white;
width: 100vw;
height: 100vh;
 `;
  
const Conteudo =styled.div` 
display:flex;
color:purple;
text-align:center;
font-size:20px;
flex-direction: column;
  align-items:center;
  justify-content:center;
  width:460px;
  height:680px;
  margin-left:35%;

`;

const ButtonRetornar =styled.button` 
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
} `;

const ButtonCandidatar =styled.button` 
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
} `;


 export default function PublicPage () {
  const [trip, setTrip] = useState([]);
  const history = useHistory();
  useProtectPage();

  const goToHomePage = () => {
    history.push("/")
  };
  
  const goToFormPage = () => {
    history.push("/FormPage")
  };
  useEffect(() => {
    getTrip();
  }, []);

  const getTrip = () => {
    axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-caetano-dumont/trips",
      
      )
      .then((res) => {
        setTrip(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };
return(
  
<Container>
  <Header/>
<Conteudo>

<h3><u><i>Quer se candidatar?</i></u></h3>

{trip.map(item => (
      <p key={trip.id}> {item.name} - {item.date} - {item.planet}
     {item.durationInDays} dias - {item.description}
     <ButtonCandidatar onClick={goToFormPage}>Quero esta</ButtonCandidatar>
     <hr/>
     </p>
     
    
  ))}

<ButtonRetornar onClick={goToHomePage}>Retornar</ButtonRetornar>
</Conteudo>
</Container>
  );
  }