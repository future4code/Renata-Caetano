import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header';
import { useHistory } from "react-router-dom";
import useProtectPage from '../Hooks/UseProtectPage';

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

 export default function DetailTrip () {
  const [trip, setTrip] = useState({});
  const history = useHistory();
  useProtectPage();
  
  const goToPrivatePage = () => {
    history.push("/PrivatePage")
  };

  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = () => {
    axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-caetano-dumont/trip/r63KY8hAEROuhKFsy9PV",
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

return(
<Container>
  <Header/>
<Conteudo>
<h3><u><i>Detalhes</i></u></h3>
      <p>{trip.name}</p>
      <p>{trip.planet}</p>
  
<ButtonRetornar onClick={goToPrivatePage}>Retornar</ButtonRetornar>
</Conteudo>
  </Container>
  );
  }