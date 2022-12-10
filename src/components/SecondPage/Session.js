
import styled from 'styled-components';

export default function Session(){
return(
    <>
    
        <p>Quinta-feira - 24/06/2021</p>
        <TimeContainer>
        <StyleTime>15:00</StyleTime>
        <StyleTime>15:00</StyleTime>
        </TimeContainer>


        <p>Quinta-feira - 24/06/2021</p>
        <TimeContainer>
        <StyleTime>15:00</StyleTime>
        <StyleTime>15:00</StyleTime>
        </TimeContainer>

       
    </>
)
}

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