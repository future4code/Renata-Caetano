import React from 'react';
import * as S from '../StyledGeral'
import Logo from '../../Assests/IMG/Logo.jpg'
function Header() {
  return (
<S.NavHeader>

<img src={Logo} alt='logo baloes de conversa'/>
<h1>Labeddit</h1>
</S.NavHeader>


  )
}

export default Header;