import React from 'react';
import './App.css';
import {DadosGerais} from './components/Etapa01';
import {InformacoesDeEnsino} from './components/Etapa02';
import {InformacoesGeraisDeEnsino}from './components/Etapa03';
import {FormularioAcabou}from './components/Etapa04';

class App extends React.Component {

state ={
  etapa:1,
}
irParaProximaEtapa =()=>{
  this.setState({
    etapa:this.state.etapa+1
  })
}
renderizaEtapa = () => {
 switch (this.state.etapa){
case 1:
  return <DadosGerais/>;
case 2:
  return<InformacoesDeEnsino/>;
case 3:
  return<InformacoesGeraisDeEnsino/>;
case 4:
  return<FormularioAcabou/>  
 }

}
  render (){

    if (this.state.etapa===4){
      return <FormularioAcabou />

    }else{
 
      return (
        <div>
          {this.renderizaEtapa()}
          <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>

        </div>
      );
  }
}  

export default App;