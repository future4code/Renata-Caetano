import React from 'react';
import axios from 'axios'


class App extends React.Component{
state ={
  activity:null
}
  onClickButton=()=>{
    axios.get('http://www.boredapi.com/api/activity/').then((response)=>{
      console.log(response);
      this.setState({activity:response.data})
      console.log('ATIVIDADE',this.state.activity);
    });

  };
  

 render(){
  return (
    <div >
      <button onClick={this.onClickButton}>Atividades</button>
    </div>
  );
}
}

export default App