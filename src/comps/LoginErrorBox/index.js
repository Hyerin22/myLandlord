import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ Imported comps ============== //
import SubHead from '../SubHead';

// ============ CSS ============== //
const ErrorCont = styled.div`
  width: 350px;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 50px 50px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  // transition: all 1s ease-in-out;

  @media (max-width: 1000px){
    width: 240px;
    height: 150px;
  }
  @media (max-width: 500px) {
    width: 150px;
    height: 80px;
    padding: 40px 40px;
  }
`;

const IconCont = styled.div`
  margin-left: 250px;

  @media (max-width: 500px) {
    margin-left: 130px;
  }
`;

const ButtonInput = styled.button`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    border: none;
    background-color: #5333ED;
    border-radius: 20px;
    width: ${props=>props.width};
    height: ${props=>props.height}px;
    font-size: ${props=>props.size}px;    
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    :hover{
        transform: scale(0.95);
        transition-duration: 0.5s;       
    }

    @media (max-width: 500px) {
      width: 80px;
      height: 50px;
    }
`;

const ButtonText = styled.p`
    font-family: 'Heebo', sans-serif;  
    color:${props=>props.color} ;
    font-size: ${props=>props.fontSize};
    text-align:center;
    font-weight: ${props=>props.fontWeight};

    @media (max-width: 500px) {
      font-size: 16px;
    }
`;

// ============ Function ============== //
const LoginErrorBox = ({
  
// ============ Props
    errortext = "You need to login first.",
    text="Log In",
    width = "80%",
    height = 72,
    color="#fff",
    fontSize="24px",
    fontWeight="500",

// ============ Route To
    routeTo = "/LogIn",

    clickHandler=() => {}

}) => {

// ============ Router
    const router = useRouter();

// ============ Layout
    return (
      <ErrorCont 
        onClick={() => clickHandler()}
      >
        <IconCont>
          <img src='./icons/icon_close.svg' width={20}/>
        </IconCont>
        <SubHead 
          text = {errortext}
          marginB="20"
          fontSize="24"
        />
        
        <ButtonInput 
          width={width} 
          height={height}
          onClick={()=>router.push(routeTo)}
        >          
          <ButtonText
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
          >
            {text}
          </ButtonText>
        </ButtonInput>
      </ErrorCont>
    );
}

export default LoginErrorBox;