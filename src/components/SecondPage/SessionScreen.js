import Logo from "../Logo";
import styled from 'styled-components';

import Footer from "../Footer";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SessionScreen(){

const {idFilme} = useParams()
const [chosenMovie, setChosenMovie] = useState(undefined)
    
    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
        const promise = axios.get(URL)
        promise.then(res => setChosenMovie(res.data))     
    
        promise.catch(err => console.log(err.response.data)) 
    }, [])

    if (chosenMovie === undefined) {
        return <div>Carregando...</div>
      }
    



    return(
        <>
        <Logo/>
        <Container>
        <p>Selecione o horário</p>
        <SessionContainer>

      
           {chosenMovie.days.map((m) => (
  <>        
           <span data-test="movie-day">
           <p>{m.weekday} - {m.date}</p>
           <TimeContainer>
            {m.showtimes.map((time)=> ( 
                  <Link to={`/assentos/${time.id}`} key={time.id}>
 <StyleTime data-test="showtime" key={time.id}> {time.name} </StyleTime>
 </Link>

            ))}
 </TimeContainer> 
 </span>
 </>
 ))}

        </SessionContainer>
        </Container>
        <Footer
        image={chosenMovie.posterURL}
        title={chosenMovie.title}
        />
        </>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin: auto;
    p{
        margin-top: 43px;
        margin-bottom: 43px;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;  
    }
`
const SessionContainer = styled.div`
width: 375px;
display: flex;
flex-wrap: wrap;
align-items: flex-start;;
flex-direction:column;
margin-left: 24px;
p{
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin:0;

}
span{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction:column;   
}
`
const StyleTime = styled.div`
width: 83px;
height: 43px;
background-color: #E8833A;
border-radius: 3px;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.02em;
justify-content:center;
color: #FFFFFF;
margin-bottom: 23px;
margin-top: 23px;
margin-right: 8px;
`

const TimeContainer = styled.div`
width: 375px;
display: flex;
flex-wrap: wrap;
`