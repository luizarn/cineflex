import Seats from "./Seats"
import styled from 'styled-components';
import Footer from "../Footer";
import Logo from "../Logo";
import InformationsClient from "./InformationsClient";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carregando from "../../images/carregando.jpg"


export default function SeatsCreen({clicked, setClicked, clientCpf, clientName, setClientCpf, setClientName, setNameMovie, setTimeMovie, setDateMovie}){

const {idSessao} = useParams()
const [sessionSeat, setSessionSeat] = useState(undefined)


useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    const promise = axios.get(URL)
    promise.then(res => setSessionSeat(res.data))     

    promise.catch(err => console.log(err.response.data)) 
}, [])

if (sessionSeat === undefined) {
    return (
        <Loading>
        <img src={Carregando} alt="carregando"/>
        <div>Carregando...</div>
        </Loading>
    )
  }

function turnIdentifications(){
    setNameMovie(sessionSeat.movie.title)
    setDateMovie(sessionSeat.day.date)
    setTimeMovie(sessionSeat.name)
}

turnIdentifications()

    return(
        <>
        <Logo/>
        <Container>
                <p>Selecione o(s) assentos(os)</p>
                <SeatsContainer >
        {sessionSeat.seats.map ((s) => ( <Seats key={s.id} number={s.name} status={s.isAvailable} clicked={clicked} setClicked={setClicked}/>))}
                </SeatsContainer>
            
            <LegendSeat>
              <SelectedSeat></SelectedSeat>  
              <Available></Available>
              <Unavailable></Unavailable>
            </LegendSeat>
            <LegendTextSeat>
                <h1>Selecionado</h1>
                <h1>Disponível</h1>
                <h1>Indisponível</h1> 
            </LegendTextSeat>

        </Container>

            <InformationsClient
        title={sessionSeat.movie.title}
        day={sessionSeat.day.weekday}
        time={sessionSeat.name}
        setClientCpf={setClientCpf}
        setClientName={setClientName}
        clientName={clientName}
        clientCpf={clientCpf}
            clicked={clicked}
            setClicked={setClicked}
            />

            
            <Footer
           image={sessionSeat.movie.posterURL}
            title={sessionSeat.movie.title}
            day={sessionSeat.day.weekday}
            time={sessionSeat.name}
            />
            </>
    )
}

const Container = styled.div`
display: flex;
width: 375px;
flex-direction: column;
align-items: center;
text-align: center;
margin: auto;
    p{
        margin-top: 43px;
        margin-bottom:18px;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;  
    }
`

const SeatsContainer = styled.div`
width: 375px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
margin-left:24px;
margin-right:24px;
margin-bottom: 18px;
`

const LegendSeat = styled.div`
display:flex;
justify-content:space-between;
margin:auto;
width: 225px;
`
const SelectedSeat = styled.div `
width: 25px;
height: 25px;
background-color: #1AAE9E;
border: 1px solid #0E7D71;
border-radius: 17px;
`
const Available = styled.div`
width: 25px;
height: 25px;
background: #C3CFD9;
border: 1px solid #7B8B99;
border-radius: 17px;
`
const Unavailable = styled.div`
width: 25px;
height: 25px;
background: #FBE192;
border: 1px solid #F7C52B;
border-radius: 17px;
`
const LegendTextSeat = styled.div`
display:flex;
justify-content:space-between;
margin:auto;
width: 275px;
margin-top: 10px;
margin-bottom:42px;
h1{
    font-weight: 400;
    font-size: 13px;
    line-height: 15px; 
    letter-spacing: -0.013em;
    color: #4E5A65;
}
`
const Loading = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
img{
    width: 200px;
    height: 200px;
}
`
