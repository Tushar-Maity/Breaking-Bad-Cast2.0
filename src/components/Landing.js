import React from 'react'
import styled from 'styled-components'
import LOGO from '../images/logo.png'
import BANNER from '../images/background.jpg'
import {Link} from 'react-router-dom'

const Landing = () => {
    return (
        <LandingContainer>
            <Container>
                <Header>
                    <img src={LOGO} alt="logo_image"/>
                </Header>
                <MidContent>
                    <ContentLeft>
                        <h1>Stay Out Of My Territory..</h1>
                        <Link to="/data">
                            <button>Get Into</button>
                        </Link>
                    </ContentLeft>
                    <ContentRight>
                        <img src={BANNER} alt="banner_image"/>
                    </ContentRight>
                </MidContent>
            </Container>
        </LandingContainer>
    )
}

const LandingContainer = styled.div`
    background-image: linear-gradient(to bottom right, #093009, #369457);
    height: 100vh;
`;

const Container = styled.div`
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const Header = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MidContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContentLeft = styled.div``;

const ContentRight = styled.div`
    img {
        height: 400px;
        width: 600px;
    }
`;

export default Landing
