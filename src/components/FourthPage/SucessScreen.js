import Logo from "../Logo";
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function SucessScreen({clicked, clientName, clientCpf, nameMovie, dateMovie, timeMovie, setClicked, setClientName, setClientCpf, setNameMovie, setDateMovie, setTimeMovie}){

    if(clicked === []){
        return(
            <div>Carregando...</div>
        )
    }

    function clearInfos(){
        setClicked([])
         setClientName("") 
         setClientCpf("")
         setNameMovie("")
         setDateMovie("")
         setTimeMovie("")
    }
    
    return(
        <>
        <Logo/>
        <Container>
                <p>Pedido feito</p>
                <p>com sucesso!</p>
        <ContainerInfos>
        <FinalInfos data-test="movie-info">
            <h1>Filme e Sessão</h1>
            <h2>{nameMovie}</h2>
            <h2>{dateMovie}  {timeMovie}</h2>
        </FinalInfos>

        <FinalInfos data-test="seats-info">
            <h1>Ingressos</h1>
            {clicked.map((s) => (
            <h2>Assento {s}</h2>
            ))}
        </FinalInfos>

        <FinalInfos data-test="client-info"> 
            <h1>Comprador</h1>
            <h2>Nome: {clientName}</h2>
            <h2>CPF: {clientCpf}</h2>
        </FinalInfos>
        </ContainerInfos>

        <Link to="/">
        <button data-test="go-home-btn" onClick={(clearInfos)}>
                Voltar para Home
            </button>
            </Link>
                </Container>
        </>
      

    )
}


const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;
display: flex;
margin-top: 30px;
    p{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #247A6B; 
        margin: auto;
        
    }
    button{
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
    margin-top:90px;
    }
`
const ContainerInfos = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
margin-left: 28px;
`
const FinalInfos = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
margin-top:40px;
text-align: start;

h1{
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
    margin-bottom: 6px;
    text-align: start;
}
h2{
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #293845;
    text-align: start;
}
`
