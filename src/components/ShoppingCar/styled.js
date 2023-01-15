import styled from "styled-components";

export const StyledShoppingCar = styled.div`
width: 15vw;
border: solid 3px;
border-radius: 15px;
background: radial-gradient(circle, rgba(225,113,232,0.8379726890756303) 0%, rgba(70,117,242,0.8575805322128851) 100%);
color: snow;
button{
  border-radius: 15px;
}
button:hover{
        cursor: hover;
        background-color: red;
        transform: scale(1.1);
    }
`
export const ButtonFinalizar = styled.button`
  width: 100px;
  align-self: left;
  margin-top: 10px;
  background-color: red;
  color:snow
`;