import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import CharacterDetail from './components/CharacterDetail';
import CharacterDisplay from './components/CharacterDisplay';
import Header from './components/Header';
// import Landing from './components/Landing';

const App = () => {

  const [loading, setLoading] = useState(true);

  const [content, setContent] = useState([]);

  const [text, setText] = useState('');

    useEffect(() => {
        const results = fetch(`https://www.breakingbadapi.com/api/characters?name=${text}`)
        results.then((response) => {
            return response.json();
        }).then((result) => {
            setContent(result)
            setLoading(false);
            console.log(content);
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [text])

  return (
    <AppContainer>
      <Router>
        <Switch>
          {/* <Route exact path="/">
            <Landing />
          </Route> */}
          <Route exact path="/">
            <Header text={text} setText={setText}/>
            <CharacterDisplay dataContent={content} loading={loading}/>
          </Route>
          <Route exact path="/characters/:id">
            <CharacterDetail/>
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
}

const AppContainer = styled.div``;

export default App;
