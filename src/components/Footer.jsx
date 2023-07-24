import styled from "styled-components";

export default function Footer(props) {
    
    const { title, posterURL, weekday, hour} = props;

    return (
        <FooterCont>

            <div>
                <img src={posterURL} alt={title} />
            </div>
            
            <div>
                <p>{title}</p>
                {}
                <p>{ weekday && hour && `${weekday} - ${hour}`}</p>
            </div>

        </FooterCont>
    );
}

const FooterCont = styled.div`
width: 100%;
position: fixed;
bottom: 0;
background-color: #C3CFD9;
display: flex;
flex-direction: row;
font-size: 20px;
align-items: center;
height: 120px;



div:nth-child(1) {
    
    display: flex;
    align-items: center;
    border-radius: 3px;    
    margin: 12px;
    justify-content: center;
    background-color: white;
    box-shadow: 0px 2px 4px 2px #0000001A;
    
    img {
        width: 50px;
        height: 70px;
        padding: 8px;
    }
}

div:nth-child(2) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    

    p {
        text-align: left;
        &:nth-child(2) {
            margin-top: 10px;
        }
    }
}
`