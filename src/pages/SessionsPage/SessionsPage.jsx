import axios from 'axios';
import styled from "styled-components"
import SessionCard from '../../components/SessionCard';
import { BASE_URL } from '../../constants/urls';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



export default function SessionsPage() {

    const { idFilme } = useParams();

    const [sessions, setSessions] = useState(undefined);
    
    useEffect(() => {

        axios.get(`${BASE_URL}/movies/${idFilme}/showtimes`)
        .then( resp => setSessions(resp.data))
        .catch( erro => alert(erro.response.data.message));

    }, []);

    if ( sessions === undefined){
        return <div>Carregando...</div>
    }

    console.log(sessions);
    
    return (
        <PageContainer>

            Selecione o horário
            <div>
                {sessions.days.map( session => <SessionCard key={session.id} session={session}/>)}                
            </div>

            <Footer posterURL={sessions.posterURL} title={sessions.title}/>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`
