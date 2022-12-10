import styled from 'styled-components';
export default function Seats({number}){

    return(
        <NumberSeat>

{number} 
        </NumberSeat>
        
          
    );
}


const NumberSeat = styled.div`
width: 26px;
height: 25px;
background: #C3CFD9;
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