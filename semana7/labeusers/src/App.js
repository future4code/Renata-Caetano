import React from 'react';
import styled from "styled-components";
import Cadastro from './components/cadastro' 
import Registros from './components/registros'
import axios from 'axios'

class App extends React.Component{
state={

estaLogada:false
};

onClickLogin=()=>{
  this.setState({estaLogada:true})
};

onClickLogout =()=>{
this.setState({estaLogada:false})

};

  render(){
  
  const renderizaTelaCorreta = () => {
    if (this.state.estaLogada) {
      return (
      <div>
        <Cadastro />
        <button onClick={this.onClickLogout}>Ir para lista de registros</button>
      </div>
      )
    }
      else{
        return(
          <div>
            <Registros />
            <button onClick={this.onClickLogin}>Voltar para cadastro </button>
          </div>

       )
      }
};
return (
  <div>
  {renderizaTelaCorreta()}
  </div>
 );
}
}




export default App;
