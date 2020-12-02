import styled from 'styled-components'

export const Container=styled.div`
height:100vh;
width:100vw;
background-color:rgb(90, 200, 253);
display:flex;
flex-direction:column;
align-items:center;
padding-top:100px;
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
export const NavHeader = styled.div`
display:flex;
align-items:center;
background-color:white;
h1{
  color:rgb(90, 200, 253);
  font-size:40px;
}
img{
  width:100px;
}
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

  export const FeedCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

