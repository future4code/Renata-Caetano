// import React from 'react';
// import Header from '../../Components/Header/Header';
// import {useHistory}from 'react-router-dom';
// import * as S from '../../Components/StyledGeral'
// import { goToLoginPage} from '../../Routes/Cordinator';
// import {useProtectPage}from '../../Hooks/useProtectPage'

// function FeedPage() {
//     const history=useHistory();
//     useProtectPage()

//     const feeds = useRequestData(`${BaseUrl}/labEddit/posts`, [])

//   return (
//    <div>
//    <Header/>
//   <S.Container>
//   {feeds.map(feeds => {
//                 return <S.FeedCard 
//                     key={id}
//                     id={id}
                   
//                 />
//             })}
// <S.ButtonBack onClick={()=>goToLoginPage(history)}>Voltar</S.ButtonBack>


// </S.Container>

//   </div>

//   )
// }

// export default FeedPage;