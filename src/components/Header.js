import React from 'react'
import styled from 'styled-components'
import Logo from '../images/logo.png'
import { MdSearch } from 'react-icons/md'
// import {Link} from 'react-router-dom'

const Header = ({ text, setText }) => {
    
    return (
        <HeaderContainer>
            <HeaderLeft>
                <img src={Logo} alt="logo_image"/>
                <HeaderLeftContent>
                    <h1>Breaking</h1>
                    <h1>Bad</h1>
                </HeaderLeftContent>
            </HeaderLeft>
            <HeaderSearch>
                <input 
                    placeholder="Search Characters" 
                    type="text" 
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                />
                <MdSearch />
            </HeaderSearch>
            {/* <Link to='/' style={{textDecoration: "none"}}>
                <Logout>    
                    Get Back
                </Logout>
            </Link> */}
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    height: 140px;
    padding: 0 150px;
    border-bottom: 2px solid whitesmoke;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const HeaderLeft = styled.div`
    margin-right: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        height: 100px;
        width: 172px;;
    }
`;

const HeaderLeftContent = styled.div`
    margin-left: -44px;
    font-size: 22px;
    background-image: linear-gradient(to bottom right, #093009, #29773e, #369457);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`;

const HeaderSearch = styled.div`
    background-color: whitesmoke;
    height: 40px;
    width: 340px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 380px;

    input {
        border: none;
        outline: none;
        height: 35px;
        width: 280px;
        background-color: whitesmoke;
    }
`;

// const Logout = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 10px;
//     height: 46px;
//     width: 120px;
//     background-color: #29773e;
//     color: #fff;
//     font-size: 18px;
//     transition: all .2s;

//     &:hover {
//         background-color: whitesmoke;
//         color: #29773e;
//     }
// `;

export default Header
