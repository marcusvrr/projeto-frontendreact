import styled from "styled-components"

export const ContainerFinalizado = styled.div`
    width: 100%;
    min-height: 84vh;
    border-radius: 8px;
    box-shadow: 1px 1px 4px rgb(191,191,191);
    display: flex;
    flex-direction: column;
    background-color: radial-gradient(circle, rgba(12,31,128,1) 0%, rgba(207,52,159,1) 100%);;
    color: #5A2455;
    justify-content: space-around;
  
    h1,h2,h3{
    text-align: center;
    }
    div:last-child{
        display: flex;
        justify-content: center;
    }
    button{
        background-color: #A94DF3;
        border-radius: 20px;
        font-size: 16px;
        color: white;
        width: 30%;
        height: 40px;
        border: none;
    }
    button:hover{
        cursor: pointer;
        background-color: #AA7DFC;
    }
`