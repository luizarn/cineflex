import Seats from "./Seats"
import styled from 'styled-components';
import Footer from "../Footer";
import Logo from "../Logo";
import InformationsClient from "./InformationsClient";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SeatsCreen(){

const {idSessao} = useParams()
const [sessionSeat, setSessionSeat] = useState(undefined)

useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    const promise = axios.get(URL)
    promise.then(res => setSessionSeat(res.data))     

    promise.catch(err => console.log(err.response.data)) 
}, [])

if (sessionSeat === undefined) {
    return <div>Carregando...</div>
  }
    // let arrayNumbers = []


    // function numberSeats(){
    //     for (let i = 1; i < 51; i++){
    //         arrayNumbers.push(i)
    //         console.log(arrayNumbers)
    //     }
    // }
    //     numberSeats()

    return(
        <>
        <Logo/>
        <Container>
                <p>Selecione o(s) asentos(os)</p>
                <SeatsContainer>
        {sessionSeat.seats.map ((s) => ( <Seats key={s.id} number={s.name} />))}
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

            <InformationsClient/>
            <ButtonChoice>
                Reservar assento(s)
            </ButtonChoice>
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
h1{
    font-weight: 400;
    font-size: 13px;
    line-height: 15px; 
    letter-spacing: -0.013em;
    color: #4E5A65;
}
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