import styled from 'styled-components'

export const LoginContainer=styled.div`
height:100vh;
width:100vw;
background-color:rgb(90, 200, 253);
display:flex;
flex-direction:column;
align-items:center;
padding:30px;


`
export const ButtonEnter=styled.button`

 margin:10px;
 background-color: blue;
  border: 1px solid blue;
  color: white;
  text-align: center;
  text-decoration: none;
  justify-content:space-around;
  border-radius:10px;
  width:80px;
  cursor: pointer;
  &:hover {
  background-color:#f4ecf4;
  color:blue;
  }`;

export const ButtonRegister=styled.button`
background-color: blue;
width:80px;
  border: 1px solid blue;
  color: white;
  text-align: center;
  text-decoration: none;
  justify-content:space-around;
  border-radius:10px;
  cursor: pointer;
  &:hover {
  background-color:#f4ecf4;
  color:blue;
  }`;
  export const Input = styled.input`
  width:300px;
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active,
  &:focus {
    text-align: left;
  }
`;

