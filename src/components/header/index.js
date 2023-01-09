import { LogoContainer, StyledHeader, StyledName, ContainerCarrinho } from "./styled"


function Header() {
    return (
        <StyledHeader >
            <LogoContainer>
                <img src="https://cdn-icons-png.flaticon.com/512/1789/1789725.png" alt="Logo Planeta" />
                <StyledName ><h1>Labe camisetas Espaciais </h1>
                    <h5>Camisetas de outro mundo para você</h5>
                </StyledName >

            </LogoContainer>
            <ContainerCarrinho>
                <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/512/external-shopping-cart-valentines-day-flatart-icons-lineal-color-flatarticons.png" alt="carrinho" />

            </ContainerCarrinho>


        </StyledHeader>
    )
}
export default Header