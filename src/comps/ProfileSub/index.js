import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const Cont = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    margin-left: 5%;
`;

const Sub = styled.p`
    font-size: 30px;
    margin-bottom: 10px;
    font-weight: 500;
    color: #2F281E;
    font-family: 'Montserrat', sans-serif;

    @media(max-width: 1000px){
        font-size: 25px;
    }
    @media(max-width: 500px){
        font-size: 18px;
    }
`;

const Line = styled.div`
    border-top: 2px solid #5333ED;
    width: 150px;

    @media(max-width: 500px){
    width: 100px
    }
`;

const DisplayRow = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// ============ Function ============== //
const ProfileSub = ({
// ============ Props
    text="Properties",
}) => {

// ============ Layout
    return(
        <Cont>
            <DisplayRow>
                <Sub>
                    {text}
                </Sub>
                <Line />
            </DisplayRow>

        </Cont>
    );
}

export default ProfileSub;