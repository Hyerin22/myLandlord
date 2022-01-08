import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const HeaderCont = styled.div`
    display:flex;
    justify-content:left;
`;

const Text = styled.p`
    font-size: ${props=>props.fontSize};
    font-weight: 2;
    color:#6E7076;
    align-items:left;
    margin-top:${props=>props.marginTop};
`;

// ============ Function ============== //
const ListText = ({

// ============ Props
    text="Log In",
    fontSize= "30",
    marginTop="0",
}) => {
    
// ============ Layout
    return(
        <HeaderCont>
            <Text fontSize={fontSize}>
                {text}
                {marginTop}
            </Text>
        </HeaderCont>
    );
}

export default ListText;