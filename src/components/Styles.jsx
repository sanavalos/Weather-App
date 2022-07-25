import styled from "styled-components";
import weather from "../images/weather.jpg";

export const Frame = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Title = styled.div`
font-family: 'Montserrat', sans-serif;
font-weight: 700;
font-size: 36px;
padding: 50px;
`

export const SingleCard = styled.div`
    font-family: 'Montserrat', sans-serif;
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1vh 0.5vw;
    border: 2px solid #f4f3fe;
    background-color: #b7d1dac5;
    margin: 20px;

    h2{
        margin: 0px;
        text-transform: uppercase;
    }

    button {
        background-color: #ED6A5E;
        border-radius: 4px;
        color: white;
        cursor: pointer;
    }

    .button {
        align-self: flex-end;
        background: transparent;
    }

    button:hover{
        color: white;
        background-color: #FC440F;
    }

    .details {
        font-size: 14px;
    }
    
    .bottomBox {
        max-width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        
    }

    .image {
        max-width: 50%;
        
    }
    
    .temps {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`

export const MultipleCards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const NavBar = styled.div`
background-image: url(${weather});
background: linear-gradient(rgba(66, 94, 160, 0.75), rgba(66, 94, 160, 0.75)), url(${weather});
background-position: center 0;  
padding: 40px;
width: 700px;
border-radius: 20px;

.title {
    margin: 0px;
    font-weight: 500;
}
`

export const Searchbar = styled.div`
    margin-top: 20px;

    .bar{
        border: none;
        outline-width: 0;
        height: 25px;
        width: 300px;
        padding: 0 0 0 10px;
        margin-right: 5px;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
    }

    .submit{
        width: 20px;
        height: 25px;
        padding: 0px;
        border: 0px;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        background-color: #b4b4b4;
        cursor: pointer; ;
    }

    .submit img {
        height: 50%;
        max-width: 100%;
        max-height: 100%;
    }
`

export const Clock = styled.div`
    position: absolute;
    left: 80%;
    width:150px;
    height:150px;
    border-radius: 50%;
    background-color: #26a4ed76;
    display: flex;
    flex-direction: column;

    div{
        margin-top: 30%;
    }

    h2,h4{
        margin: 0px;
    }
`