import React  from 'react';
import {HeaderStyle,Title1,Title2,UsuarioImg,ButtonUsuario} from './Styled/styled'
import addusuario from './img/addusuario.png'
import trocausuario from './img/trocausuario.png'

export default function Header(props){

return(
<div>
<HeaderStyle>
<h1><Title1>astro</Title1><Title2>match</Title2></h1>

<ButtonUsuario>
    {props.currentScreen ?
<UsuarioImg src={addusuario} onClick={props.goCard} alt='usuario' /> 
    :
<UsuarioImg src={trocausuario} onClick={props.goCard} alt='usuario' /> 
}
</ButtonUsuario>
</HeaderStyle>

</div>


)
   
}