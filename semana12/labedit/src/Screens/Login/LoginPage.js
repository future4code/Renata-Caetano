import React from 'react';
import { goToHomePage } from '../../Routes/Cordinator';
import {useHistory}from 'react-router-dom';
import * as S from '../../Components/StyledGeral'
import Header from '../../Components/Header/Header'
import {login}from '../../Services/User'
import {useForm}from '../../Hooks/useForm'
import { useUnprotectPage } from '../../Hooks/useUnprotectPage';

function LoginPage() {
  useUnprotectPage()
  const {form,onChange}=useForm({email:'',password:''})
    const history=useHistory();

    const changeInput=(event)=>{
      const{value,name}=event.target;
      onChange(value,name);
    }
    const formSend=(event)=>{
      event.preventDefault();
        login(form,history)
    }

  return (
    <div>
 <Header/>
   
  <S.Container>
    
<form onSubmit={formSend}>
<input value={form.email} placeholder ='Email'onChange={changeInput}type='email'name='email'></input>
<br></br>
<input value={form.password} placeholder = 'password' type='password'onChange={changeInput}name='password'></input>
<br></br>
<S.ButtonEnter type='submit' >Entrar</S.ButtonEnter>
<S.ButtonBack onClick={()=>goToHomePage(history)}>Voltar</S.ButtonBack>
</form>

 
</S.Container>

</div>

  )
}

export default LoginPage;