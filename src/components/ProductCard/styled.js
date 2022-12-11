import styled from "styled-components";

export const CardContainer = styled.div`
width: 200px;
border: 2px solid black;
display: flex;
flex-direction: column;
border-radius: 10px;
`;
export const Imagem = styled.img`
  align-items: center;
  height: 190px;
  width: 196px;
  border-radius:10px;
`;
export const CardDescricao = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`;

export const ButtonAdicionar = styled.button`
  background-color: lightblue;
  align-self: center;
  margin-top: 4px;
  border-radius: 15px;
`;
