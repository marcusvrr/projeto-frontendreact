import styled from "styled-components";

export const StyledHeader = styled.div`
width: 100vw;
height: 9vh;
background: radial-gradient(circle, rgba(12,31,128,1) 0%, rgba(207,52,159,1) 100%);
color: bisque;
display: flex;
justify-content: space-between;
align-items: center;

`
export const LogoContainer= styled.div`
display:flex;
gap: 10px;
align-items: flex-start;
padding: 20px;
img{
    width: 75px;
    height: 75px;
}
`
export const StyledName = styled.div`
display: flex;
flex-direction: column;
padding-top: 7px;
`
export const ContainerCarrinho = styled.div`
color: bisque;
display:flex;
margin-right: 5vw;
img{
    width: 100px;
    height: 100px;
}

`