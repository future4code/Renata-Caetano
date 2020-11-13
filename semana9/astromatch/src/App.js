import React,{useEffect,useState} from 'react';
import Card from './components/card';
import {Container} from './components/Styled/styled'
import MatchScreen from './components/matchScreen'
import Header from './components/header'

export default function App() {
 const [currentPage,setCurrentPage]=useState(true)
 
 const setPage=()=>{
   setCurrentPage(!currentPage)
 }
  return(

<Container>
<Header goCard={setPage} currentScreen={currentPage} />

{currentPage ? <Card /> : <MatchScreen/>}

</Container>
 
    
  );
}


