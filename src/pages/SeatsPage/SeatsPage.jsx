import styled from "styled-components"
import Footer from '../../components/Footer';
import Seat from '../../components/Assento'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BuyerForm from './BuyerForm';
import { BASE_URL } from '../../constants/urls';
import Caption from './Caption';
import { seatColors } from '../../constants/colors';


export default function SeatsPage(props) {

    const { setInfos } = props;

    const { idSessao } = useParams();

    const [session, setSession] = useState(undefined);
    const [selectedSeats, setSelectedSeats] = useState([]);    

    useEffect(() => {

        axios.get(`${BASE_URL}/showtimes/${idSessao}/seats`)
            .then(resp => setSession(resp.data))
            .catch(erro => alert(erro.response.data.message));

    }, []);

    if (session === undefined) {
        return <div> Carregando...</div>
    }

    console.log(session);

    function handleSeat(seat) {
        if (!seat.isAvailable) {
            alert('Esse assento não está disponível');
        } else {
            const isSelected = selectedSeats.some(s => s.id === seat.id);
            if (isSelected) { 
                const newList = selectedSeats.filter(s => s.id !== seat.id);
                setSelectedSeats(newList);
            } else { 
                setSelectedSeats([...selectedSeats, seat]);
            }
        }
    }

    console.log(selectedSeats);

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {session.seats.map(seat => (
                    <Seat
                        key={seat.id}
                        seat={seat}
                        seatColors={seatColors}
                        handleSeat={() => handleSeat(seat)}
                        isSelected={selectedSeats.some(s => s.id === seat.id)}
                    />
                )
                )}
            </SeatsContainer>

            <Caption />

            <BuyerForm
                selectedSeats={selectedSeats}
                session={session}
                setInfos={setInfos}
            />

            <Footer
                posterURL={session.movie.posterURL}
                title={session.movie.title}
                weekday={session.day.weekday}
                hour={session.name}
            />

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
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

