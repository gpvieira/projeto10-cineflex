import { Link } from 'react-router-dom';
import styled from "styled-components"

export default function Filme(props) {
    
    const {id, posterURL, title} = props.movie;

    return (
        <MovieCards>

            <Link to={`/sessoes/${id}`}>
                <img src={posterURL} alt={title} />
            </Link>
            
        </MovieCards>
    );
}

const MovieCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 145px;
    height: 210px;    
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    margin: 10px;

    img {
        width: 130px;
        height: 190px;
    }
`