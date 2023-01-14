
import { FormatMoney, somaTotalCarrinho } from "../../functions/Funcao"
import { StyledShoppingCar, ButtonFinalizar } from "./styled"


function ShoppingCar (props) {

    const listaDeCompras = props.carrinho.map((produto,index)=>{       
        return (
            <div key={index} >
            <p>{produto.name} X {produto.quantidade}
            <button onClick={()=>{props.removerItem(produto)}} >Remover</button></p>
            <p>{FormatMoney(produto.precoTotal)}</p>
        </div>
        )
    })

    function finalizaPedido(){ 
        if (listaDeCompras>0) {
            return( alert("Escolha alguma camiseta"))
        }else{
            return(props.setPage(2))
        }   
    }

    return (
        <StyledShoppingCar>
            <h2>Carrinho de Compras:</h2>
                {listaDeCompras}
                <h4>O valor Total é : {somaTotalCarrinho(props.carrinho)}</h4>
                <ButtonFinalizar onClick={()=>finalizaPedido()}>Finalizar Compras</ButtonFinalizar>
        </StyledShoppingCar>
    )
}
export default ShoppingCar