import axios from "axios"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import HomePage from "./pages/HomePage/HomePage"
import NavBar from "./components/NavBar"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function App() {

  const [infos, setInfos] = useState({});
  axios.defaults.headers.common['Authorization'] = 'AQekNWHuKpR3Fs4Rb4wchXK6';

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/sessoes/:idFilme' element={<SessionsPage />} />
        <Route path='/assentos/:idSessao' element={<SeatsPage setInfos={setInfos} />} />
        <Route path='/sucesso' element={<SuccessPage infos={infos}/>} />

      </Routes>

    </BrowserRouter>
  )
}
