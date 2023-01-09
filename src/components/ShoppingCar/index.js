
import { StyledShoppingCar } from "./styled"


function ShoppingCar (props) {

    console.log(props.carrinho);

    const listaDeCompras = props.carrinho.map((produto)=>{
        return (
            <div>
            <p>{produto}</p>
        </div>
        )
    })

    return (
        <StyledShoppingCar>
            <h2>Carrinho de Compras:</h2>
                {listaDeCompras}
        </StyledShoppingCar>
    )
}
export default ShoppingCar