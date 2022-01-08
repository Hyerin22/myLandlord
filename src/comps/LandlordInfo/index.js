import styled from 'styled-components';
import React from 'react';
import { SyncTwoTone } from '@mui/icons-material';
import { style } from '@mui/system';

// ============ CSS ============== //
const Cont = styled.div`
    display: flex;
    flex-direction: column;
`;

const InfoCont = styled.div`
    display:flex;
    flex-directoin:row;
    align-items: center;
`;

const Icon = styled.img`
    src:${props=>props.src};
    display:block;
    object-fit: cover;
    margin-right: 20px;
`;

const Info = styled.p`
    font-family: Montserrat;
    font-weight: 600;
    color: #000000;
    font-size: 24px;
`;


// ============ Function ============== //
const LandlordInfo = ({
// ============ Props
    text = "5 reviews",
    src="/icons/icon_reviews.png"

}) => {

// ============ Layout
    return(
        <Cont>
            <InfoCont>
                <Icon src={src}/>
                <Info>{text}</Info>
            </InfoCont>
        </Cont>
    );
}

export default LandlordInfo;