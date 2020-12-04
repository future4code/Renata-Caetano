import styled from 'styled-components'

export const Container=styled.div`
height:100vh;
width:100vw;
background-color:rgb(90, 200, 253);
display:flex;
flex-direction:column;
align-items:center;
padding-top:50px;
`
export const FeedContainer=styled.div`
height:100%;
width:100%;
background-color:rgb(90, 200, 253);
display:flex;
flex-direction:column;
align-items:center;
padding-top:50px;
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
  flex-direction: column;
  text-align: center;
  margin: 10px auto;
  background: white;
  border: 2px solid blue;
  border-radius: 10px;
  width: 300px;
  height: 250px;
  padding: 15px;
`
export const Ppost = styled.p`
color:blue;
`

export const ImgLikes = styled.img`
width:25px;
height:25px;
padding:5px;
cursor: pointer;
`
export const ImgNoLike = styled.img`
padding:5px;
width:25px;
height:25px;
margin-bottom:-11px;
cursor: pointer;
`
export const ImgComentario = styled.img`
display:flex;
padding:20px;
width:25px;
height:25px;
margin-left:150px;
cursor: pointer;
`
export const Footer = styled.footer`
display:flex;
justify-content:space-between;
align-items:center;
margin-top:0px;

`
export const AreaImg = styled.div`
display:flex;
align-items:center;
margin-top:0px;
`
export const InputPost =styled.input` 
width:290px;
height:200px;
`
export const ButtonPost=styled.button`
display:block;
margin-left:120px;
background-color: blue;
margin-top:10px;
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
