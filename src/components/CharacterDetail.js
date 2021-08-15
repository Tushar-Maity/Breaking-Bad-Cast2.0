import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import QoutesComponent from './QoutesComponent'

const CharacterDetail = () => {

    const { id } = useParams()

    const [detailData, setDetailData] = useState([])

    useEffect(() => {
        const results = fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
        results.then((response) => {
            return response.json();
        }).then((result) => {
            setDetailData(result[0])
        })
        .catch((error) => {
            console.log(error);
        })
    }, [id])


    // console.log('detailData',detailData)
    return (
        <div>
            <h1>{id}</h1>
            <QoutesComponent name={detailData?.name}/>
        </div>
    )
}

export default CharacterDetail
