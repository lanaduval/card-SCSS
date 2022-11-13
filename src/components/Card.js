import React from 'react';
import styled from 'styled-components';
import Yullola from '../Yullola_Priestess.jpg'

export default function Card() {

const Card = styled.div`
display : flex;
max-width: 30rem;
max-height: 15rem;
border: 0.5px solid grey; 
margin-left : 5rem;
margin-top: 5rem;
`;

const CardBottom = styled.div`
border-bottom: 0.5px solid grey;
border-left: 0.5px solid grey;
border-right: 0.5px solid grey;
justify-content : space-around;
display: flex;
max-width: 30rem;
margin-left : 5rem;
`;

const CardTop = styled.div`
display: flex;
flex-direction: column;
align-items : center;

`



    return (
        <div>
    <Card >
        <CardTop>
        <img src={Yullola} alt =" album cover" />
        </CardTop>

        <CardTop>
        <h1> Yullola </h1>
        <p> Priestess </p>
        <p> (2021) </p>
        </CardTop >
        
        </Card>
        
        
        <CardBottom>
        <p> Rate this album </p>
        <p> ☆☆☆☆☆</p>
        </CardBottom>
        </div>
    
);
}