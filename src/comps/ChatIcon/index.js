import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ CSS ============== //
const Cont = styled.button`
  width:74px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 50%;
  background-color: #ffffff;
  border: solid 1px #5333ED;
  box-sizing: border-box;
  
  @media(max-width:1000px){
    width: 64px;
    height: 64px;
  }
  
  :hover{
    transform: scale(0.95);
    transition-duration: 0.5s;       

}
`

const Img = styled.img`
  width:70%;
  height: ${props => props.height};
  display: block;
  object-fit: ${props => props.objectFit};  
`

// ============ Function ============== //
// ============ Props
const ChatIcon = ({
// container 
  routeTo = "/Chat",

// image
  src = "./icons/icon_chat.svg",
  alt = "image box",
  objectFit = "contain",  

}) => {

// ============ Router
  const router = useRouter();
  
// ============ Layout  
    return (
      <Cont 

// ============ Router
        onClick={()=>router.push(routeTo)}
      >
        <Img
          src={src}
          alt={alt}
          objectFit={objectFit} 
        />
      </Cont>
    );
  }

export default ChatIcon;