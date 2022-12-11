import produto from "../../produtos/produtos.json"
import CardProduct from "../ProductCard/ProductCard";
import { MeusProdutos, StyledMain } from "./styled";
import Filters from "../Filters";
import ShoppingCar from "../ShoppingCar";

function Produtos() {

  const listaProdutos = produto.map(item => {
    return (
      <CardProduct
        key={item.id}
        image={item.image}
        name={item.name}
        preco={item.price}
      />
    )
  }
  )
  return (
    <StyledMain>
        <Filters />
        <MeusProdutos>{listaProdutos}</MeusProdutos>
        <ShoppingCar />
    </StyledMain>
  );

}
export default Produtos;