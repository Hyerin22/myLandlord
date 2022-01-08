import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router'

// ============ Imported Comps ============== //
import FooterNav from '../FooterNav';
import HorLogo from '../HorLogo';

// ============ CSS ============== //
const Cont = styled.div`
    width:100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
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
`;
const Nav = styled.div`
    width:100%;
    display:flex;
`;

const NavText = styled.div`
    display: flex;
    flex:0.7;
    margin-top: 10px;
    justify-content: space-between;
`;
const LogoPart = styled.div`
    display:flex;
    flex:1;
    margin-bottom: 13px;
`;

const Line = styled.div`
    width: 1310px;
    height: 2px;
    background: #5333ED;
`;

const CopyRight = styled.p`
    font-family: Heebo;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #6E7076;
    font-family: Heebo;
`;

// ============ Function ============== //
const Footer = ({}) => {

// ============ Layout
    return(
        <Cont>
            <Upside>
                <NavText>
                    <Nav>
                        <FooterNav routeTo="/" />
                        <FooterNav routeTo="/Landlord" text="Landlord"/>
                        <FooterNav routeTo="/Chat" text="Chat"/>
                        <FooterNav routeTo="/ContactUs" text="Contact Us"/>
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
}

export default Footer;