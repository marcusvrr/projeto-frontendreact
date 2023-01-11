import produto from "../../produtos/produtos.json"
import CardProduct from "../ProductCard/ProductCard";
import { MeusProdutos, StyledMain } from "./styled";
import Filters from "./Filters";
import ShoppingCar from "../ShoppingCar";
import { useState } from "react";

function Produtos() {
  const [pesquisa, setPesquisa] = useState("")
  const [valorMinimo, setValorMinimo] = useState("")
  const [valorMaximo, setValorMaximo] = useState("")
  const [ordem, setOrdem] = useState("none")
  const [carrinho, setCarrinho] = useState([])

 function listaDeCompra (objeto) {
  setCarrinho([...carrinho, objeto])
  console.log(objeto);
 }
 const sortMethods = {
  none: { method: (a, b) => (a.id - b.id) },
  crescente: { method: (a, b) => (a.price > b.price ? 1 : -1) },
  decrecente: {
    method: (a, b) => (a.price > b.price ? -1 : 1)
  }
};

  const listaProdutos = produto
  .sort(sortMethods[ordem].method)
  .filter((produto)=>{
    return produto.name.toLowerCase().includes(pesquisa.toLowerCase())
  })
  .filter((produto) => produto.price >= valorMinimo)
  .filter((produto) => {return valorMaximo ? produto.price <= valorMaximo:produto})
  .map((item) => {
    return (
      <CardProduct
        key={item.id}
        listaDeCompra={listaDeCompra}
        item={item}
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