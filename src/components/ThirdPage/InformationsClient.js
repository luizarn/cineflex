

import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function InformationsClient({clicked, clientName, clientCpf, setClientName, setClientCpf}){


const navigate = useNavigate()

function addInfClient(e){
e.preventDefault()
const informations = {ids: clicked, name:clientName, cpf:clientCpf}
const url_post = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many"
const promise = axios.post(url_post, informations)

promise.then(res => {
navigate("/sucesso", {state: {clientName, clientCpf, clicked}})
})
promise.catch(err => console.log(err.response.data))

}



    return(
        <>
        <form onSubmit={addInfClient}>
        <ContainerClient>
            <Title forHtml="name">Nome do comprador:</Title>
            <input 
             data-test="client-name"
            id="name"
            type="text"
            placeholder="Digite seu nome..."
            value={clientName}
            onChange={e => setClientName(e.target.value)}
            required
            />
        </ContainerClient>

        <ContainerClient>
            <Title forHtml="cpf">CPF do comprador:</Title>
            <input 
            data-test="client-cpf"
            placeholder="Digite seu CPF..."
            id="cpf"
            type="text"
            maxLength={11} 
            minLength={11}
            value={clientCpf}
            onChange={e => setClientCpf(e.target.value)}
            required
            />
        </ContainerClient>
        <ButtonChoice data-test="book-seat-btn" type="submit">
                Reservar assento(s)
            </ButtonChoice>
        </form>

        
        </>
    )
}

const ContainerClient = styled.div`
display: flex;
flex-direction:column;
justify-content:flex-start;
margin-left:24px;
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

const Title = styled.label`

    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
`

const ButtonChoice = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;
    border: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    justify-content:center;
    margin:auto;
    margin-top:47px;
`