import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ CSS ============== //
const ButtonCont = styled.div`
    margin-top: ${props=>props.mtop}px;
    margin-right: ${props=>props.mright}px;
    width: 100%;
    display:flex;
    justify-content:${props=>props.justify};
`;

const ButtonInput = styled.button`
    display:flex;
    background-color:${props=>props.bg};
    border: ${props=>props.border};
    border-radius:${props=>props.radius}px;
    width: 360px;
    height:60px;
    font-size: ${props=>props.size}px;
    align-items:center;
    justify-content:center;
    box-shadow: ${props=>props.bshadow}; 

    :hover{
        transform: scale(0.85);
        transition-duration: 0.5s;       
    }

    @media(max-width:1000px){
        width: 300px;
        height: 50px;
    }
    @media(max-width:500px){
        width: 150px;
        height: 50px;
    }
`;

const ButtonText = styled.p`
    font-family: 'Heebo', sans-serif;  
    color:${props=>props.color} ;
    font-size: 24px;
    text-align:center;
    font-weight: ${props=>props.fontWeight};

    @media(max-width:1000px){
        font-size: 20px;
    }
`;

// ============ Function ============== //
const RoutButton = ({
// ============== Props
    text="Log In",
    margintop = 100,
    marginright="",
    bgcolor = "#ffffff",
    radius = 20,
    // height = 72,
    border = "5px solid #5333ED;",
    routeTo = "/LogIn",
    bshadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    color="#000",
    fontWeight="500",
    justify="center"

}) => {

// ============== Router
    const router = useRouter();

// ============== Layout
    return (
        <ButtonCont 
        mtop={margintop} 
        mright={marginright} 
        justify={justify} 
        onClick={()=>router.push(routeTo)}>
            <ButtonInput 
                bg={bgcolor} 
                radius={radius} 
                border={border}
                bshadow={bshadow}
            >
                <ButtonText
                color={color}
                fontWeight={fontWeight}
                >
                    {text}</ButtonText>
            </ButtonInput>
        </ButtonCont>
    );
}

export default RoutButton;