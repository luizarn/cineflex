import { useState } from 'react';
import styled from 'styled-components';
export default function Seats({number, status, clicked, setClicked}){

const [color, setColor] = useState("#C3CFD9")



function handeleSeat(number){
    setColor("#1AAE9E")
if(color === "#1AAE9E"){
    setColor("#C3CFD9")
}

const newArray = ([...clicked, number])
setClicked(newArray)
console.log(newArray)}







    return(
     <>
        {status? (
        <NumberSeat  data-test="seat"
        color={color}
        onClick={() => handeleSeat(number)}> 
           {number} 
        </NumberSeat> 
        ) : (
        <NumberSeat  data-test="seat"
        color="#FBE192"
        onClick={() =>  alert("Esse assento não está disponível")}> 
            {number} 
        </NumberSeat> 
        )}
    </>
          
    );

        }
    

const NumberSeat = styled.div`
width: 26px;
height: 25px;
background-color:   
    ${props => 
   props.color};  
border: 1px solid #808F9D;
border-radius: 12px;
display:flex;
align-items:center;
justify-content:center;
letter-spacing: 0.04em;
color: #000000;
font-weight: 400;
font-size: 11px;
line-height: 13px;
margin: 5px;
`