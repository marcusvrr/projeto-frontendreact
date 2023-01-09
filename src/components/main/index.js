import produto from "../../produtos/produtos.json"
import CardProduct from "../ProductCard/ProductCard";
import { MeusProdutos, StyledMain } from "./styled";
import Filters from "../Filters";
import ShoppingCar from "../ShoppingCar";
import { useState } from "react";

function Produtos() {
  const [pesquisa, setPesquisa] = useState("")
  const [valorMinimo, setValorMinimo] = useState("")
  const [valorMaximo, setValorMaximo] = useState("")
  const [ordem, setOrdem] = useState("")
  const [carrinho, setCarrinho] = useState([])

 function listaDeCompra (objeto) {
  setCarrinho([...carrinho, objeto])
  console.log(objeto);
 }

  const listaProdutos = produto.map((item) => {
    return (
      <CardProduct
        key={item.id}
        image={item.image}
        name={item.name}
        preco={item.price}
        descricao={item.description}
        listaDeCompra={listaDeCompra}
   
      />
    )
  }
  )

  return (
    <StyledMain>
      <Filters
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        ValorMinimo={valorMinimo}
        setValorMinimo={setValorMinimo}
        ValorMaximo={valorMaximo}
        setValorMaximo={setValorMaximo}
        ordem={ordem}
        setOrdem={setOrdem}
      />

      <MeusProdutos>{listaProdutos}</MeusProdutos>
      <ShoppingCar
      carrinho={carrinho}
      setCarrinho={setCarrinho} />
    </StyledMain>
  );

}
export default Produtos;