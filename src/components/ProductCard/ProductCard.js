import React from "react";
import { ButtonAdicionar, CardContainer, CardDescricao, Imagem } from "./styled";

function CardProduct(props) {
    return (
      <CardContainer>
        <Imagem src={props.image} />
        <CardDescricao>
          <h4>{props.name}</h4>
          <p>descrição</p>
          <ButtonAdicionar>Adicionar ao Carrinho</ButtonAdicionar>
        </CardDescricao>
      </CardContainer>
    );
  }
  
  export default CardProduct;