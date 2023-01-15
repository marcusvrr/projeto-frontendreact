import { ContainerFinalizado } from "./styled"

const PedidoFinalizado = (props) => {

    function fimDoPedido() {
        props.setPage(1)
    }

    return (
        <>
            <ContainerFinalizado>
                <div>
                    <h1>Parabéns! Pedido Finalizado.</h1>
                    <h3>Pedido #A00b001</h3>
                    <h3>Obrigado pela visita e pelas compras</h3>
                </div>
                <div>
                    <div>
                        <h2>Seu pedido está a caminho e chegará em breve.</h2>

                    </div>
                    <div>
                        <img src="https://github.com/marcusvrr/projeto-frontendreact/blob/barbosa-marcusv-rrodrigues1/src/img/compraFinal.png?raw=true" alt="Planetinha Obrigado" />
                    </div>
                </div>
                <div>
                    <button onClick={() => fimDoPedido(1)}>Volte ao site</button>
                </div>
            </ContainerFinalizado>

        </>
    )
}

export default PedidoFinalizado