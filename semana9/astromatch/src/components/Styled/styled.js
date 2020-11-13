
import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 550px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 7px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 5px
`;

export const CardInfo = styled.main`
margin: 0 2.4em;
    border: 1px solid #752e93;
    background-color: #fff;
    height: 380px;
    max-width:100%;
  `;

export const CardStyle = styled.div`
    
`;

export const HeaderStyle =styled.header`
color:purple;
border-radius:10px;
display: flex;
justify-content:space-around;
align-items:center;
`;

export const FooterStyle =styled.footer`
display:flex;
justify-content:space-around;
padding:10px;
`;

export const Gostar =styled.img`
width:30px;
height:30px;
cursor: pointer;
  &:hover {
    width:55px;
    height:55px;
    border-radius:5px;
`;

export const X =styled.img`
width:30px;
height:30px;
cursor: pointer;
  &:hover {
    width:55px;
    height:55px;
    
    border-radius:5px;
`;
export const Title1 = styled.span`
    margin-left:5rem;
    color: #59aca1;
`;

export const Title2 = styled.span`
    color: #752e93;
`;
export const Photo = styled.img`
    max-width: 100%;
    height: 250px;
    width: 300px;
    object-fit: contain;
`;
export const UsuarioImg = styled.img`
width:30px;
height:30px;
cursor: pointer;
  &:hover {
    width:55px;
    height:55px;
`;

export const ButtonUsuario =styled.div`

`;

export const ImgMatch = styled.img`
  width: 50px;
`;
export const ButtonClear = styled.button`
    border: 1px solid purple;
    margin: 15px 130px;
    border-radius:5px;
    color:purple;

    cursor: pointer;
     & :hover{  
      
        width: 30px;
        width: 30px;
     }
`