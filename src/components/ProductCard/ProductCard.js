import React from "react";
import { ButtonAdicionar, CardContainer, CardDescricao, Imagem } from "./styled";


function CardProduct(props) {
    return (
      <CardContainer>
        <Imagem src={props.image} />
        <CardDescricao>
          <h4>{props.name}</h4>
          <h5>R$:{props.preco}</h5>
          <p>{props.descricao}</p>
          <ButtonAdicionar onClick={()=>props.listaDeCompra(props.name)}>Adicionar ao Carrinho</ButtonAdicionar>
        </CardDescricao>
      </CardContainer>
    );
  }
  
  export default CardProduct;