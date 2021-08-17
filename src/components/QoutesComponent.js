import React, { useState, useEffect } from 'react'

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
        <div>
            
        </div>
    )
}

export default QoutesComponent
