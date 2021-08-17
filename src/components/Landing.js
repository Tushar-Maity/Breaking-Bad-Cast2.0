import React from 'react'
import styled from 'styled-components'
import LOGO from '../images/logo.png'
import BANNER from '../images/background.jpg'
import {Link} from 'react-router-dom'

const Landing = () => {
    return (
        <LandingContainer>
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
        </LandingContainer>
    )
}

const LandingContainer = styled.div``;

const Header = styled.div`
    background-color: #093009;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MidContent = styled.div`
    display: flex;
`;

const ContentLeft = styled.div``;

const ContentRight = styled.div``;

export default Landing
