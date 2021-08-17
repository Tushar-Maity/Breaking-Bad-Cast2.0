import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import QoutesComponent from './QoutesComponent'
import styled from 'styled-components'

const CharacterDetail = () => {

    const { id } = useParams()

    const [detailData, setDetailData] = useState([])

    useEffect(() => {
        const results = fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
        results.then((response) => {
            return response.json();
        }).then((result) => {
            setDetailData(result[0])
            console.log(result[0])
        })
        .catch((error) => {
            console.log(error);
        })
    }, [id])
    
    // console.log('detailData',detailData)
    return (
        <CharacterDetailContainers>
            {/* <img src={image} alt="image_hehe"/> */}
            <QoutesComponent name={detailData?.name}/>
        </CharacterDetailContainers>
    )
}

const CharacterDetailContainers = styled.div`
`;

export default CharacterDetail
