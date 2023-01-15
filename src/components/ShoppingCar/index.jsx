
import { FormatMoney, somaTotalCarrinho } from "../../functions/Funcao"
import { StyledShoppingCar, ButtonFinalizar } from "./styled"


function ShoppingCar (props) {

    const listaDeCompras = props.carrinho.map((produto,index)=>{       
        return (
            <div key={index} >
            <h5>{produto.name} - Quant. {produto.quantidade}
            <button onClick={()=>{props.removerItem(produto)}} >Remover</button></h5>
            <p>{FormatMoney(produto.precoTotal)}</p>
        </div>
        )
    })

    function finalizaPedido(){ 
        if (listaDeCompras.length ===0) {
            return( alert("Olhe com carinho os produtos e coloque a camiseta que você gostou no carrinho <3"))
        }else{
            return(
                localStorage.clear(),
                props.setPage(2))
        }   
    }

    return (
        <StyledShoppingCar>
            <h2>Carrinho de Compras:</h2>
                {listaDeCompras}
                <h4>O valor Total é : {somaTotalCarrinho(props.carrinho)}</h4>
                <ButtonFinalizar /*disabled={props.carrinho.length === 0}*/ onClick={()=>finalizaPedido()}>Finalizar Compras</ButtonFinalizar>
        </StyledShoppingCar>
    )
}
export default ShoppingCar