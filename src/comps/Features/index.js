import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ Imported Comps ============== //
import SubHead from '../SubHead';
import Para from '../Para'

// ============ CSS ============== //
const FeatCont = styled.div`    
  // max-width: 30%;
  // min-width: 300px;
  // min-height: 654px;
  // max-height: 650px;
  width: 230px;
  height: 500px;
  border: solid 7px #7763D6;
  border-radius: 30px;
  padding: 35px 20px;  
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-sizing: border-box;
  margin-bottom: 20px;


  @media(max-width: 990px){
    width: 230px;
    height: 500px;
  }

  @media(min-width: 1000px){
    min-width: 300px;
    height: 700px;
	}
  @media(min-width: 1200px){
    min-width: 360px;
	}

`;

const Img = styled.img`
  width: 95%;
  height: auto;
  display: block;
  object-fit: contain;
  margin-bottom: 40px;

  @media(min-width: 1000px){
    margin-bottom: 0px;
  }
`

const SubText = styled.p`  
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000;
  text-align: center;
  margin: 0px 0px 20px 0px;
  overflow-wrap: break-word;

  @media(min-width: 1000px){
    font-size: 28px;
  }
`;

const SubPara = styled.p`
  font-family: 'Heebo', sans-serif;  
  font-size: 16px;
  font-weight: 400;
  color: #000;
  text-align: center;
  overflow-wrap: break-word;
  margin: 0px 0px 10px 0px;

  @media(min-width: 1000px){
    font-size: 22px;
  }
`;

// ============ Function ============== //
const Features = ({
  
// ============ Props
// FeatCont

// img
  src= "./images/img_review.svg",
  alt="review",

// Text
  title="Transparent Review Site",
	para="Tenants can write reviews on the current or previous landlord.",
}) => {

// ============ Router 
    const router = useRouter();

// ============ Layout
  return (
    <FeatCont 
      data-aos="fade-up"
    >
      <Img 
        src={src}
        alt={alt}
      />
      <SubText>{title}</SubText>
      <SubPara>{para}</SubPara>
    </FeatCont>
  );
}

export default Features;