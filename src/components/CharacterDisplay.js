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

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <CharacterDisplayContainer>
            {currentArticles?.map(content => (
                <CharacterCard 
                    id={content.char_id} 
                    image={content.img} 
                    name={content.name} 
                    nickname={content.nickname} 
                />
            ))}
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
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 400px);
    grid-gap: 50px;
`;

export default CharacterDisplay
