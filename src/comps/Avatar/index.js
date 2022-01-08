import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const Icon =styled.img`
    width:80px;
    height: 80px;
    src:${props => props.src};
    vertical-align: middle;  
    border-radius: ${props => props.bradius};
    object-fit: cover;
    box-shadow: ${props=>props.bshadow}; 
    box-sizing: border-box;
`
// ============ Function ============== //
const Avatar =({
// ============ Props
    //icon
    src= "./icons/onicon.png",
    bshadow="",
    bradius=""
}) =>{
    
// ============ Layout
    return(
        <Icon
            src={src}
            bshadow={bshadow}
            bradius={bradius}
        />
    ); 
}

export default Avatar; 