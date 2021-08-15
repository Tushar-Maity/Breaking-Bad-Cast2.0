// import { number } from 'prop-types';
import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import styled from 'styled-components'

const Pagination = ({ 
    currentPage, 
    setCurrentPage, 
    articlesPerPage, 
    totalArticles, 
    paginate
}) => {

    const pageNumbers = [];

    const pageChange = (num) => {
        paginate(num);
        window.scroll(0, 0);
    }

    const handlePrevButton = () => {
        setCurrentPage(currentPage - 1)
        window.scroll(0, 0);
    }

    const handleNextButton = () => {
        setCurrentPage(currentPage + 1)
        window.scroll(0, 0);
    }

    const totalPages = Math.ceil(totalArticles / articlesPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }
    return (
        <PaginateContainer>
            <ul>
                {currentPage > 1 &&
                    <li onClick={handlePrevButton}>
                        <AiOutlineLeft />
                    </li>
                }
                {pageNumbers.map(number => {
                    return(
                        <li 
                            key={number}
                            onClick={() => pageChange(number)}
                            className={currentPage === number ? "active" : null}
                        >
                            {number}
                        </li>
                    )
                })}
                {currentPage < totalPages && 
                    <li onClick={handleNextButton}>
                        <AiOutlineRight />
                    </li>
                }
            </ul>
        </PaginateContainer>
    )
}

const PaginateContainer = styled.div`

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;

        li {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            height: 45px;
            width: 45px;
            background-color: whitesmoke;
            margin: 17px;
            border-radius: 50%;
            box-shadow: 4px 3px 13px 1px rgba(204,198,217,0.91);
            -webkit-box-shadow: 4px 3px 13px 1px rgba(204,198,217,0.91);
            -moz-box-shadow: 4px 3px 13px 1px rgba(204,198,217,0.91);

            &.active {
                transform: scale(1.2);
            }
        }
    }
`;

export default Pagination
