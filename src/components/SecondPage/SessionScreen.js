import Logo from "../Logo";
import styled from 'styled-components';

import Footer from "../Footer";
import Session from "./Session";


export default function SessionScreen(){
    return(
        <>
        <Logo/>
        <Container>
        <p>Selecione o horário</p>
        <SessionContainer>
            <Session/>
        </SessionContainer>
        </Container>
        <Footer/>
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
`