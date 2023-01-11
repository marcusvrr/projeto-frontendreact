import React from "react";
import { ButtonAdicionar, CardContainer, CardDescricao, Imagem } from "./styled";

function CardProduct({item, listaDeCompra}) {
  function addCarrinho () {
    const produtoCarrinho = {
      id:item.id,
      name:item.name,
      preco:item.price,
      precoTotal: item.price *1, quantidade:1
    } 
    listaDeCompra(produtoCarrinho)
  }
  

    return (
      <CardContainer>
        <Imagem src={item.image} />
        <CardDescricao>
          <h4>{item.name}</h4>
          <h5>R$:{item.price}</h5>
          <p>{item.description}</p>
          <ButtonAdicionar onClick={()=>addCarrinho()}>Adicionar ao Carrinho</ButtonAdicionar>
        </CardDescricao>
      </CardContainer>
    );
  }
  
  export default CardProduct;