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
    font-size: ${props=>props.fontSize};
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 36px;
    color: #2F281E;
    font-family: 'Montserrat', sans-serif;
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
    fontSize="36px"
}) => {

// ============ Layout
    return(
        <Cont>
            <DisplayRow>
                <Sub fontSize={fontSize}>
                    {text}
                </Sub>
                <Line />
            </DisplayRow>

        </Cont>
    );
}

export default ProfileSub;