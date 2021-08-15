import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CharacterDisplay from './components/CharacterDisplay';
import Header from './components/Header';

const App = () => {

  const [loading, setLoading] = useState(true);

  const [content, setContent] = useState([]);

  useEffect(() => {
    const data = fetch('https://www.breakingbadapi.com/api/characters');
    data.then((datas) => {
      return (datas.json())
    })
    .then((dataItem) => {
      setContent(dataItem)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <AppContainer>
      <Header />
      <CharacterDisplay dataContent={content} loading={loading}/>
    </AppContainer>
  );
}

const AppContainer = styled.div``;

export default App;
