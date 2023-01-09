import styled from "styled-components";

export const StyledMain = styled.div`
height: 88vh;
display: flex;
width:100vw;
justify-content: space-between;
gap: 16px;
padding: 16px;
background-image: url("https://static.natgeo.pt/files/styles/image_3200/public/eso0903a.webp?w=710&h=748");
`;

export const MeusProdutos = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 16px;
padding: 16px;
background-color: snow;
`;