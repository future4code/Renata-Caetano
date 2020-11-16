import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Cadastro from './cadastro' 

const DeleteButton = styled.span`
color:red;
margin-left:10px;
`
export default class Registros extends React.Component{
   state={
         userList:[{
               id: "1",
               name:"Renata"
         },
      
         {
            id: "2",
            name:"Joao"
      }]

   }
     render(){

const renderUserList=this.state.userList.map(user=>{
return <p key={user.id}>{user.name}<DeleteButton>X</DeleteButton></p>
})

      return (
    
<div>

<h1>Lista de Registros</h1>
{renderUserList}
</div>

      );}}