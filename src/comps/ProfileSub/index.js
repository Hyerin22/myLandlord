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
    font-size: 36px;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 36px;
    color: #2F281E;
    font-family: 'Montserrat', sans-serif;

    @media(max-width: 1000px){
        font-size: 25px;
    }
`;

const Line = styled.div`
    border-top: 2px solid #5333ED;
    width: 200px;
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