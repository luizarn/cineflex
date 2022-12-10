import Logo from "../Logo";
import Movie from "./Movie";
import styled from 'styled-components';

export default function MainScreen() {
    return (
        <>
            <Logo />
            <Container>
                <p>Selecione o filme</p>
                <MoviesContainer>
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                </MoviesContainer>
            </Container>
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

const MoviesContainer = styled.div`
width: 375px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
img{
    width: 129px;
height: 193px;
margin-bottom: 27px;
}
`