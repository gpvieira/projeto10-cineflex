import { Link } from 'react-router-dom';
import styled from "styled-components"

export default function SessionCard(props) {

    const { id, date, weekday, showtimes } = props.session;

    return (
        <SessionContainer>
            {`${weekday} - ${date}`}
            <ButtonsContainer>
                {showtimes.map(time => (
                    <Link key={time.id} to={`/assentos/${time.id}`}>
                        <button>{time.name}</button>
                    </Link>                        
                )
                )}
            </ButtonsContainer>
        </SessionContainer>
    )
}

const SessionContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;    
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;

    button {
        margin-right: 20px;
    }

    a {
        text-decoration: none;
    }
`
