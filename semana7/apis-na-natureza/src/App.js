import React from 'react';
import axios from 'axios'


class App extends React.Component{
state ={
  activityData:null
}
componentDidMount(){
this.getActivity();

}
getActivity =()=>{

    axios.get('http://www.boredapi.com/api/activity/').then((response)=>{
      console.log(response);
      this.setState({activityData:response.data})
      console.log('ATIVIDADE',this.state.activityData);
    });

  };
  render(){
  return (
    <div >
      <button onClick={this.getActivity}>Atividades</button>
      {this.state.activityData && <div>
    <p>Nome:{this.state.activityData.activity}</p>
    <p>Tipo:{this.state.activityData.type}</p>
    <p>Numero de participantes: {this.state.activityData.participants}</p>
    <p>Preço: {this.state.activityData.price}</p>
    </div>}
    </div>
  );
}
}

export default App