import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ============ Imported Comps ============== //
import RoutButton from "../RoutButton"
import SubHead from "../SubHead"

// ============ CSS ============== //
const ImgCont = styled.div`    
  width: 100%;
  height: 650px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap: wrap;
  position: relative;
  background-image: url(${props=>props.imgurl});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const Letterbox = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  
  @media(min-width: 1000px){
    padding: 0px 110px 0 40px;
    right: 0px;
  }
`

const Text = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-weight: 500;
  color: #000;
  text-align: center;
  margin: 0;
  margin-bottom: 30px;

  @media(max-width: 1000px){
    font-size: 26px;
    margin-bottom: 20px;
  }
`;
// ============ Function ============== //
const HeroImage = ({

// ============ Properties
  imgurl="./images/img_home.svg",

}) => {

// ============ UseEffect - animation
useEffect(() => {
  AOS.init({ duration: 2000 });
}, []);

  // ============ Layout
  return (
    <ImgCont
      imgurl={imgurl}
      data-aos="fade-right"
      data-aos-once="true"
    >
      <Letterbox>
        <Text>Share your experiences with landlord with us</Text>

        <RoutButton
          routeTo = "/Landlord"
          text="View the Landlord List"
          margintop = "0"
          bgcolor = "#5333ED"
          border = "none"
          color="#fff"
        />
      </Letterbox>
    </ImgCont>
  );
}

export default HeroImage;