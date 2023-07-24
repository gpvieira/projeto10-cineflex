import { useEffect, useState } from 'react';
import styled from "styled-components"
import { seatColors } from "../constants/colors"
export default function Seat(props){
    
    const { seat, handleSeat, isSelected } = props;

    const [status, setStatus] = useState('available');

    useEffect( () => {

        if ( isSelected ){
            setStatus('selected');
        } else {
            if ( !seat.isAvailable ){
                setStatus('unavailable');
            }else{
                setStatus('available');
            }
        }

    }, [isSelected]);

    return (
        <SeatItem onClick={handleSeat} status={status}>{seat.name}</SeatItem>
    );
}

const SeatItem = styled.div`
    display: flex;    
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 25px;
    height: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    border-radius: 25px;    
    border: 1px solid ${ props => seatColors[props.status].border};         
    background-color: ${ props => seatColors[props.status].background}; 
    margin: 5px 3px;
`