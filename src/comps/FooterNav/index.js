import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router'

// ============ CSS ============== //
const Nav = styled.div`
    height: ${props=>props.height}px;
    box-sizing: border-box;
    display: flex;
    align-items:center;
    justify-content:center;
    cursor: pointer; 

    @media(max-width: 500px){
        margin-right: 0px;
    }
`;

const Content = styled.p`
    font-family: 'Heebo', sans-serif;
    font-size: 20px;
    font-weight: 400;
    position: relative;
    margin-right: 30px;
    white-space: nowrap

    :before{
        content : "";
        position: absolute;
        background-color: #5333ED;
        height: 2px;
        width : 0;
        bottom: 0px; left: 50%;
        transition: 0.5s; 
        transform: translateX(-50%);
    }

    :hover {
        color:#5333ED; 
    }

    @media(max-width: 800px){
        font-size: 15px;
        margin-right: 16px;
    }
    @media(max-width: 500px){
        font-size: 14px;
    }
`;

// ============ Function ============== //
const FooterNav = ({
// ============ Props
    height = 50,
    text="Home",
    routeTo = "/Home"
}) => {
// ============ Routing
    const router = useRouter()

// ============ Layout
    return(
        <Nav height={height} onClick={() => router.push(routeTo)}>
            <Content>{text}</Content>
        </Nav>

    );
}

export default FooterNav;