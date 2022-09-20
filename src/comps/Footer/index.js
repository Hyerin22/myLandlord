import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";

// ============ Imported Comps ============== //
import FooterNav from "../FooterNav";
import HorLogo from "../HorLogo";

// ============ CSS ============== //
const Cont = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  z-index: 999;
  padding: 0 68px 0 68px;
  margin-bottom: 50px;
  margin-top: 130px;
`;
const Upside = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media(max-width: 500px){
    justify-content: center;
  }
`;
const Nav = styled.div`
  width: 100%;
  display: flex;
`;

const NavText = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`;

const LogoPart = styled.div`
  display: flex;
  margin-bottom: 13px;

  @media(max-width: 500px){
    display: none;
  }
`;

const Line = styled.div`
  // width: 1310px;
  width: 300px;
  // min-width: 300px;
  // max-width: 1310px;
  height: 2px;
  background: #5333ed;

  @media (min-width: 700px) {
    width: 600px;
  }
  @media (min-width: 1000px) {
    width: 900px;
  }
`;

const CopyRight = styled.p`
  font-family: Heebo;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #6e7076;
  font-family: Heebo;
`;

// ============ Function ============== //
const Footer = ({}) => {
  // ============ Layout
  return (
    <Cont>
      <Upside>
        <NavText>
          <Nav>
            <FooterNav routeTo="/" />
            <FooterNav routeTo="/Landlord" text="Landlord" />
            <FooterNav routeTo="/Chat" text="Chat" />
            <FooterNav routeTo="/ContactUs" text="Contact Us" />
          </Nav>
        </NavText>
        <LogoPart>
          <HorLogo />
        </LogoPart>
      </Upside>
      <Line />
      <CopyRight>© MyLandlord. We love our users!</CopyRight>
    </Cont>
  );
};

export default Footer;
