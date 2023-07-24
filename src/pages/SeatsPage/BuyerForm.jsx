import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';
import { useEffect, useState } from 'react';
import styled from "styled-components"

export default function BuyerForm(props) {
    
    const {selectedSeats, session, setInfos} = props;

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [disabled, setDisabled] = useState(true);

    function buyerMovie(e){
        e.preventDefault();

        const novo = {
            ids: selectedSeats.map( s => s.id),
            name: nome,
            cpf: cpf
        };       

        axios.post(`${BASE_URL}/seats/book-many`, novo)
        .then( resp => {
            
            const info ={
                movie:session.movie.title,
                date:session.day.date,
                session:session.name,
                seats: selectedSeats.map( s => `Assentos ${s.name}`),
                nome:nome,
                cpf: cpf
            }
            
            console.log(info);

            setInfos(info);

            navigate('/sucesso');
        })
        .catch( erro => alert(erro.response.data.message));        
    }

    useEffect( () => {

        if ( selectedSeats.length > 0 && nome !== '' && cpf !== ''){
            setDisabled(false);
        }else{
            setDisabled(true);
        }

    }, [nome, cpf, selectedSeats]);

    return (
        <FormContainer onSubmit={buyerMovie}>
            <label htmlFor='nome'>Nome do Comprador:</label>
            <input
                id="nome"
                placeholder="Digite seu nome..."
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <label htmlFor="cpf">CPF do Comprador:</label>
            <input
                id="cpf"
                placeholder="Digite seu CPF..."
                required
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}

            />

            <button type="submit" disabled={disabled}>Reservar Assento(s)</button>
        </FormContainer>
    );
}

const FormContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`