import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router'

// ============ CSS ============== //
const Nav = styled.div`
    height: ${props=>props.height}px;
    margin-right: ${props=>props.mright}px;
    box-sizing: border-box;
    display: flex;
    align-items:center;
    justify-content:center;
    cursor: pointer; 
`;

const Content = styled.p`
    font-family: 'Heebo', sans-serif;
    font-size: 16px;
    font-weight: 400;
    position: relative;
    margin-right: 30px;

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
`;

// ============ Function ============== //
const FooterNav = ({
// ============ Props
    height = 50,
    mright = "30px",
    text="Home",
    routeTo = "/Home"
}) => {
// ============ Routing
    const router = useRouter()

// ============ Layout
    return(
        <Nav height={height} mright={mright} onClick={() => router.push(routeTo)}>
            <Content>{text}</Content>
        </Nav>

    );
}

export default FooterNav;