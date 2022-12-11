import { LogoContainer, StyledHeader, StyledName, InputContainer, ContainerCarrinho } from "./styled"


function Header() {
    return (
        <StyledHeader >
            <LogoContainer>
                <img src="https://cdn-icons-png.flaticon.com/512/1789/1789725.png" alt="Logo Planeta" />
                <StyledName ><h1>Lab camisetas Espaciais </h1>
                    <h5>Camisetas de outro mundo para você</h5>
                </StyledName >

            </LogoContainer>
            <InputContainer>
                <input type="text"></input>
                <button><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/search-133-125845.png" alt="Procure sua camiseta" /></button>
            </InputContainer>
            <ContainerCarrinho>
                <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/512/external-shopping-cart-valentines-day-flatart-icons-lineal-color-flatarticons.png" alt="carrinho" />

            </ContainerCarrinho>


        </StyledHeader>
    )
}
export default Header