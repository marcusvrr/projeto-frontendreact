import styled from "styled-components";

export const StyledHeader = styled.div`
width: 100vw;
height: 10vh;
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
export const InputContainer = styled.div`

input{
    width: 25vw;
    height: 5vh;
    font-size: 20;
    line-height: 10px;
}
img{
    width: 45px;
    height: 45px;
}
`
export const ContainerCarrinho = styled.div`
color: bisque;
display:flex;
padding-left: 2vw;
img{
    width: 120px;
    height: 120px;
}

`