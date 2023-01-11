
import { somaTotalCarrinho } from "../../functions/FuncaoDoCarrinho"
import { StyledShoppingCar } from "./styled"


function ShoppingCar (props) {



    const listaDeCompras = props.carrinho.map((produto,index)=>{       
        return (
            <div key={index} >
            <p>{produto.name}</p>
            <p>{produto.precoTotal}</p>
        </div>
        )
    })

    return (
        <StyledShoppingCar>
            <h2>Carrinho de Compras:</h2>
                {listaDeCompras}
                <h4>O valor Total é : {somaTotalCarrinho(props.carrinho)}</h4>
        </StyledShoppingCar>
    )
}
export default ShoppingCar