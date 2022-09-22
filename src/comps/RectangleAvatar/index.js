import styled from 'styled-components';
import React from 'react';
import { margin } from '@mui/system';

// ============ CSS ============== //
const Cont = styled.div`
    width:399px;
    height:419px;
    margin-right:7%;
    margin-top: 2%;

    @media(max-width: 1000px){
        width: 300px;
        height: 300px;
    }
    @media(max-width: 500px){
        width: 200px;
        height: 200px;
    }
`;

const Avatar = styled.img`
    src: ${props=>props.src};
    display: block;
    object-fit: cover;
    width:100%;
    height: 100%;
    border-radius: 100px;

    @media(max-width: 500px){
        border-radius: 60px;
    }
`;

// ============ Function ============== //
const RetangleAvatar = ({
// ============ Props
    src="/images/img_landlordProfile.png",

}) => {

// ============ Layout
    return(
        <Cont>
            <Avatar src={src} />
        </Cont>
    );
}

export default RetangleAvatar;