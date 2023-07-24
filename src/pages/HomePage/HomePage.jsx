import styled from "styled-components"
import { BASE_URL } from '../../constants/urls';
import axios from 'axios';
import Filme from '../../components/Filme'
import { useEffect, useState } from 'react';


export default function HomePage() {

    const [movies, setMovies] = useState(undefined);

    useEffect(() => {
        
        axios.get(`${BASE_URL}/movies`)
            .then(resp => setMovies(resp.data))
            .catch(erro => alert(erro.response.data.message));

    }, []);

    if (movies === undefined) {

        return <div>Carregando....</div>

    }

    return (
        <PageContainer>

            Selecione o filme

            <ListContainer>
                {movies.map( movie => <Filme key={movie.id} movie={movie}/>)}
            </ListContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`

