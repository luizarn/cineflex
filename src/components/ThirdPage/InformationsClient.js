
import styled from 'styled-components';

export default function InformationsClient(){
    return(
        <>
        <ContainerClient>
            <h2>Nome do comprador:</h2>
            <input 
            type="text"
            placeholder="Digite seu nome..."
            />


            <h2>CPF do comprador:</h2>
            <input 
            type="text"
            placeholder="Digite seu CPF..."
            />
        </ContainerClient>
        
        </>
    )
}

const ContainerClient = styled.div`
display: flex;
flex-direction:column;
justify-content:flex-start;
margin-top:42px;
margin-left:24px;
h2{
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
}
input{
    width: 327px;
    height: 51px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    margin-bottom: 15px;
    ::placeholder{
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #AFAFAF;
        margin-left:18px;
    }
}

`