import styled from 'styled-components';

export default function Footer() {
    return (
        <StyleFooter>
            <span>
                <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt="movie" />
            </span>
            <InformationsMovie>
           <h1> Enola Holmes</h1>
            <h1>Quinta-feira - 15:00</h1>
            </InformationsMovie>
        </StyleFooter>
    )
}

const StyleFooter = styled.div`
width: 100%;
height: 117px;
background-color: #DFE6ED;
display: flex;
align-items:center;
position: fixed;
bottom: 0;
border: 1px solid #9EADBA;
  span{
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    justify-content:center;
    align-items:center;
    margin-left: 10px;
  }
  img{
    width: 48px;
    height: 72px;
  }
`
const InformationsMovie = styled.div`
display: flex;
flex-direction:column;
h1{
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
    margin-left:14px;
}
`