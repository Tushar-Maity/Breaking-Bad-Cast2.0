import React, { useState } from 'react'
import styled from 'styled-components';
import CharacterCard from './CharacterCard';
import Pagination from './Pagination';
import SyncLoader from "react-spinners/SyncLoader";
import {Link} from 'react-router-dom'

const CharacterDisplay = ({ dataContent, loading }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage] = useState(10);

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    
    const currentArticles = dataContent.slice(indexOfFirstArticle, indexOfLastArticle)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <CharacterDisplayContainer>
            {loading ? <Loader>
                <SyncLoader 
                    size="30px" 
                    color="green"
                />
            </Loader> : 
                <React.Fragment>
                    <HeaderTag>Showing Results of Page {currentPage}</HeaderTag>
                    <CardsContainer>
                        {currentArticles?.map(content => (
                            <Link to={`/characters/${content.char_id}`} key={content.char_id} style={{textDecoration: "none", color: "inherit"}}>
                                <CharacterCard 
                                    image={content.img} 
                                    name={content.name} 
                                    nickname={content.nickname} 
                                />
                            </Link>
                        ))}
                    </CardsContainer>
                    <Pagination 
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        articlesPerPage={articlesPerPage}
                        totalArticles={dataContent.length}
                        paginate={paginate}
                    />
                </React.Fragment>
            }
        </CharacterDisplayContainer>
    )
}

const CharacterDisplayContainer = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Loader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 300px);
`;

const HeaderTag = styled.h1`
    font-size: 40px;
    margin-bottom: 40px;
    background-image: linear-gradient(to bottom right, #093009, #29773e, #369457);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`;

const CardsContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 400px);
    grid-gap: 50px;
    margin-bottom: 40px;
`;

export default CharacterDisplay
