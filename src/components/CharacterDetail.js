import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import QoutesComponent from './QoutesComponent'
import Logo from '../images/logo.png'
import styled from 'styled-components'
import SyncLoader from "react-spinners/SyncLoader";
import {Link} from 'react-router-dom'

const CharacterDetail = () => {

    const { id } = useParams()
    const [loading,setLoading] = useState(false)
    const [detailData, setDetailData] = useState([])
    useEffect(() => {
        setLoading(true)
        const results = fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
        results.then((response) => {
            return response.json();
        }).then((result) => {
            setDetailData(result[0])
            setLoading(false)
        })
        .catch((error) => {
            console.log(error);
        })
    },[id])
    return (
        <>
        {loading?<Loader>
                <SyncLoader 
                    size="30px" 
                    color="green"
                />
            </Loader>:(
            <>
            <CharacterDetailContainers>
            <Link to="/">
                <LogoImage>
                    <img src={Logo} alt="logo_image"/>
                </LogoImage>
            </Link>
            <Content>
                <ImageContainer>
                    <img src={detailData.img} alt="character
                    _image"/>
                </ImageContainer>
                <CharacterDataContainer>
                    <CharacterName>Name: {detailData?.name}</CharacterName>
                    <CharacterDetailItem>
                        <span>Date of Birth : </span>
                        {detailData.birthday}
                    </CharacterDetailItem>

                    <CharacterDetailItem>
                        <span>Occupation : </span>
                    </CharacterDetailItem>
                        <Occupations>
                            {detailData.occupation?.map((occu, id) => (
                                <li key={id}>{occu}</li>
                            ))}
                        </Occupations>

                    <CharacterDetailItem>
                        <span>Status : </span>
                        {detailData.status}
                    </CharacterDetailItem>

                    {detailData.nickname &&
                        <CharacterDetailItem>
                            <span>Nickname : </span>
                            {detailData.nickname}
                        </CharacterDetailItem>
                    }

                    <CharacterDetailItem>
                        <span>Portrayed by : </span>
                        {detailData.portrayed}
                    </CharacterDetailItem>

                    <CharacterDetailItem>
                        <span>Seasons : </span>
                        {detailData?.appearance?.length>0 && detailData.appearance.map((season, i) => (
                            <span key={i}>
                                {i > 0 && ", "}
                                {season}
                            </span>
                        ))}
                    </CharacterDetailItem>
                </CharacterDataContainer>
            </Content>
            <QoutesComponent name={detailData?.name} />
        </CharacterDetailContainers>
        </>
        )}
        </>
    )
}

const CharacterDetailContainers = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to bottom right, #093009, #0a5725);

    margin-top: -60px;
    padding-top: 0;
    padding: 50px 40px;
    flex-direction: column;
    color: #fff;
`;

const Loader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 100px);
`;

const LogoImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 257px;
    width: 100%;

    img {
        height: 125px;
        width: 200px;
    }
`;

const Content = styled.div`
    display: flex;
    margin-bottom: 40px;
`;

const ImageContainer = styled.div`
    width: 300px;
    margin-right: 20px;

    img {
        width: 100%;
    }
`;

const CharacterDataContainer = styled.div`
    
`;

const CharacterName = styled.h2``;

const CharacterDetailItem = styled.p`
    margin: 12px 0;
    font-size: 18px;
    display: flex;

    span {
        font-weight: 600;
        margin-right: 5px;
    }
`;

const Occupations = styled.ul`
    margin-top: 5px;
    margin-bottom: 15px;
    line-height: 24px;
    padding-left: 30px;
`

export default CharacterDetail
