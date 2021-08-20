import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const QoutesComponent = (
    { name }
) => {

    const [ qoutes, setQoutes] = useState('')

    useEffect(() => {
        const results = fetch(`https://www.breakingbadapi.com/api/quote?author=${name}`)
        results.then((response) => {
            return response.json();
        }).then((result) => {
            setQoutes(result)
            // console.log(result)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [name])

    // console.log('qoutes', qoutes)
    return (
        <React.Fragment>
        {qoutes?.length > 0 ? (
            <Container>
                <Title>All quotes by {name} </Title>
                <ul>
                    {qoutes?.map(qoute => (
                        <Quote key={qoute.qoute_id}>
                            &ldquo; {qoute.quote} &rdquo;
                        </Quote>
                    ))}
                </ul>
            </Container>
        ) : ""}
        </React.Fragment>
    )
}

const Container = styled.div``;

const Title = styled.h2`
    display: inline-block;
    padding-bottom: 5px;
    margin-bottom: 5px;
    text-align: center;
    border-bottom: 1px solid #999;
`

const Quote = styled.li`
    margin: 14px 0;
    font-size: 21px;
    list-style: square;
`


export default QoutesComponent
