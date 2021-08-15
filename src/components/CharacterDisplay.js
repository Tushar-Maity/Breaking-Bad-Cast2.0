import React, { useState } from 'react'
import styled from 'styled-components';
import CharacterCard from './CharacterCard';
import Pagination from './Pagination';

const CharacterDisplay = ({ dataContent }) => {

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
            <h2>Showing Results of Page {currentPage}</h2>
            <CardsContainer>
                {currentArticles?.map(content => (
                    <CharacterCard 
                        id={content.char_id} 
                        image={content.img} 
                        name={content.name} 
                        nickname={content.nickname} 
                    />
                ))}
            </CardsContainer>
            <Pagination 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                articlesPerPage={articlesPerPage}
                totalArticles={dataContent.length}
                paginate={paginate}
            />
        </CharacterDisplayContainer>
    )
}

const CharacterDisplayContainer = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        margin-bottom: 40px;
    }
`;

const CardsContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 400px);
    grid-gap: 50px;
    margin-bottom: 40px;
`;

export default CharacterDisplay
