import React from 'react'
import styled from 'styled-components'

const CharacterCard = ({ id, image, name, nickname }) => {
    return (
        <CharacterCardContainer key={id}>
            <img src={image} alt="character_photo"/>
            <h1>{name}</h1>
            <h2>{nickname}</h2>
        </CharacterCardContainer>
    )
}

const CharacterCardContainer = styled.div`
    height: 622px;
    width: 400px;
    background-color: whitesmoke;
    cursor: pointer;

    img {
        width: 400px;
        height: 480px;
    }
`;

export default CharacterCard
