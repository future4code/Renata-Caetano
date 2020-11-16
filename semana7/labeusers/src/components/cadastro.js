import React from 'react';
import axios from 'axios'
import Registros from './registros'


export default class Cadastro extends React.Component{
state ={
nameValue:"",
emailValue:""

};

createUser=()=>{
const body={
  name:this.state.nameValue,
  email:this.state.emailValue
}
axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,{
  headers:{
    Authorization:"renata-caetano-dumont"
  }
  
}).then(response => {
alert("Usuário criado com sucesso")
this.setState({nameValue:"", emailValue:""})

}).catch(error=>{
  console.log(error.message)
})

}
onChangeNameValue =(event)=>{
this.setState({nameValue:event.target.value})
}

onChangeEmailValue =(event)=>{
  this.setState({emailValue:event.target.value})
  }


render(){
return(
<div>

<h1>Cadastro</h1>

<p>Nome:</p>
<input
value={this.state.nameValue} 
onChange={this.onChangeNameValue}
/>

<p>Email:</p>
<input 
value={this.state.emailValue} 
onChange={this.onChangeEmailValue}
/>
<button onClick={this.createUser}>Salvar</button>

</div>

      )
    }
}


  


      