

export const somaTotalCarrinho = (carrinho) => {
    let soma = 0
    for (const item of carrinho) {
        soma += item.precoTotal        
    }
    return soma
}