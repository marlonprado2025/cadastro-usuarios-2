
import styled from "styled-components";


export const Container = styled.div`
background:linear-gradient(to bottom,rgb(13, 1, 45),rgba(11, 16, 80, 0.89));
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding: 20px;
height: 100vh;
gap: 20px;
`
export const ToBackground = styled.div`
background: linear-gradient(to right,rgb(236, 66, 66),rgb(85, 5, 5));
height: 30vh;
width:90vw;
max-width: 800px;
border-radius: 30px;

display: flex;
justify-content: center;
align-items: center;

img{
  max-width: 100%;
  max-height: 100%;
}
`
export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
max-width: 500px;

`
export const Title = styled.h2`
 color: #fff;
 font-size: 35px;
 font-weight: 700;
 text-align: center;
 font-style: normal;
`

export const ContainerInput = styled.div`
display: flex;
gap: 10px;
`

export const Input = styled.input`
border-radius: 10px;
border:1px solidrgb(151, 149, 149);
background-color: #fff;
padding: 10px 20px;
outline: none;
width: 100%;

`
export const InputLabel = styled.label`
color: #fff;
font-size:12px;
font-weight: 500;

span{
  color:rgba(255, 0, 0, 0.74);
  font-weight: bold;
}

`

