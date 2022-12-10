import styled from 'styled-components';

export default function Logo(){
    return(
        <StyleLogo>CINEFLEX</StyleLogo>
    )
}

const StyleLogo = styled.div `
height: 67px;
background-color: #C3CFD9;
display:flex;
justify-content: center;
align-items: center;
color: #E8833A;
font-size: 34px;
line-height: 40px;

`