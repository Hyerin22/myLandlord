import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const Divdercont = styled.div`
    height:10px;
    width:100%;
    justify-content:center;
    align-items:center;
`;

const Line = styled.div`
    margin-top:20px;
    height:2px;
    background-color:#c4c4c4;
    width:95%;
    margin-right: 5%;
`;

// ============ Function ============== //
// ============ Layout
    const ListHr =(

    )=> {
        return(
           <Divdercont>
                <Line></Line>
            </Divdercont>
        )
    }

    export default ListHr; 