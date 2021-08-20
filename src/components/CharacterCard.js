import React from 'react'
import styled from 'styled-components'

const CharacterCard = ({ image, name, nickname, status, dob, occupation }) => {
    return (
        <CharacterCardContainer>
            <img src={image} alt="character_photo"/>
            <CardContentContainer>
                <h1>Name: {name}</h1>
                <ItemContainer>Occupation : </ItemContainer>
                <Occupations>
                    {occupation?.map((occu, id) => (
                        <li key={id}>{occu}</li>
                    ))}
                </Occupations>
                <ItemContainer>
                    <span>Date of birth : </span>
                    {dob}
                </ItemContainer>
                <ItemContainer>
                    <span>Status : </span>
                    {status}
                </ItemContainer>
            </CardContentContainer>
        </CharacterCardContainer>
    )
}

const CharacterCardContainer = styled.div`
    height: 785px;
    width: 400px;
    background-color: whitesmoke;
    cursor: pointer;
    background-image: linear-gradient(to bottom right, #093009, #369457);
    color: #fff;
    border-radius: 12px;

    img {
        border-radius: 12px 12px 0 0;
        width: 400px;
        height: 480px;
    }
`;

const CardContentContainer = styled.div`
    height: calc(765px - 480px);
    width: 100%;
    padding: 20px;
`;

const ItemContainer = styled.h3`
    margin: 8px 0;
    font-weight: 600;
`;

const Occupations = styled.ul`
    margin-top: 5px;
    margin-bottom: 15px;
    line-height: 24px;
    padding-left: 30px;
`

export default CharacterCard
