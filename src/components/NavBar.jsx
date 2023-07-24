import { Link } from 'react-router-dom';
import styled from "styled-components"

export default function NavBar() {
    return (
        <NavContainer>
            <Link to={'/'}>
                CINEFLEX
            </Link>
        </NavContainer>
    );
}

const NavContainer = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    font-family: 'Roboto', sans-serif;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;    
    font-size: 34px;
    
    a {
        text-decoration: none;
        color: #E8833A;
    }
`