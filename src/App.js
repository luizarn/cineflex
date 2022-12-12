import MainScreen from "./components/FirstPage/MainScreen";
import SucessScreen from "./components/FourthPage/SucessScreen";
import SessionScreen from "./components/SecondPage/SessionScreen";
import SeatsCreen from "./components/ThirdPage/SeatsScreen";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";


export default function App() {


  const [clientName, setClientName] = useState("")
const [clientCpf, setClientCpf] = useState("")
const [clicked, setClicked] = useState([]);

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<MainScreen/>} />
        <Route path="/sessoes/:idFilme" element={<SessionScreen/>}/>
        <Route path="/assentos/:idSessao" element={<SeatsCreen/>}c lientName={clientName} clientCpf={clientCpf} clickec={clicked} setClicked={setClicked} setClientCpf={setClientCpf} setClientName={setClientName} />
        <Route path="/sucesso" element={<SucessScreen/>} clientName={clientName} clientCpf={clientCpf} clickec={clicked}/>
      </Routes>
    </BrowserRouter>
  )
}


