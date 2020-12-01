import styled from 'styled-components'

export const RegisterContainer=styled.div`
height:100vh;
width:100vw;
background-color:rgb(90, 200, 253);
display:flex;
flex-direction:column;
align-items:center;

`

export const ButtonBack=styled.button`
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
