import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ CSS ============== //
const LogoCont = styled.div`    
  width: 202px;
  height: 114px;
  margin-right: 83px;
  margin-bottom: ${props=>props.mbttm}px;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor: pointer;

  @media(max-width: 1000px){
    margin-right: 30px;
  }

  @media(max-width: 500px){
    margin-right: 0;
    max-width: 130px;
    // position: absolute;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  min-width: 150px;

`
// ============ Function ============== //
const VerLogo = ({

// ============ Routing
  routeTo="/",

// ============ Props
  marginbttm = "",
  src= "./images/logo_vertical.png",
  alt="MyLandlord logo",
}) => {

// ============ Router
  const router = useRouter();

// ============ Layout
  return (
    <LogoCont 
      mbttm={marginbttm}
      onClick={()=>router.push(routeTo)}
    >
      <Logo 
        src={src}
        alt={alt}
      />
    </LogoCont>
  );
}

export default VerLogo;