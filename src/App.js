import MainScreen from "./components/FirstPage/MainScreen";
import SucessScreen from "./components/FourthPage/SucessScreen";
import SessionScreen from "./components/SecondPage/SessionScreen";
import SeatsCreen from "./components/ThirdPage/SeatsScreen";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<MainScreen/>} />
        <Route path="/sessoes/:idFilme" element={<SessionScreen/>}/>
        <Route path="/assentos/:idSessao" element={<SeatsCreen/>}/>
        {/* <Route path="/" element={<SucessScreen/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}


