import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ CSS ============== //
const ButtonCont = styled.div`
    width: 15%;
    display:flex;
    justify-content:right; 
`;

const ButtonInput = styled.button`
    display:flex;
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    font-size: ${props=>props.size}px;
    align-items:right;
    justify-content:right;
    border:none;

    :hover{
        transform: scale(0.85);
        transition-duration: 0.5s;       
    }
`;

const ButtonText = styled.p`
    font-family: 'Heebo', sans-serif;  
    color:"#FFF" ;
    font-size: ${props=>props.fontSize};
    text-align:center;
    font-weight: ${props=>props.fontWeight};
`;

const Icon = styled.img`
    padding: 10px;
    width: 55px;
    height: 50px;    
`

// ============ Function ============== //
const IconButton = ({

// ============ Properties
    text="Popularity",
    width = 120,
    height = 72,
    fontSize="24px",
    fontWeight="500",
    src="./icons/updown.png",
}) => {

// ============ Router
    const router = useRouter();

// ============ Layout
    return (
        <ButtonCont onClick={()=>router.push(routeTo)}>
            <ButtonInput 
                    width={width} 
                    height={height}
                >
                <ButtonText
                fontSize={fontSize}
                fontWeight={fontWeight}
                >
                    {text}
                </ButtonText>                    
                <Icon src={src}/>
            </ButtonInput>      
        </ButtonCont>
    );
}

export default IconButton;