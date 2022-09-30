import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ Imported Components ============== //
import NavText from '../NavText';
import VerLogo from '../VerLogo';
import LoginDrop from '../LoginDrop';

// ============ CSS ============== //
const Cont = styled.div`
  width: 100%;
  height: 150px;
  position: relative;  
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  flex-wrap: wrap;
  padding:${props => props.cpadding};
  box-sizing: border-box;
  z-index: 999;
  margin-bottom: ${props => props.cmarginB}px;

`
const Nav = styled.div`
  // width:100%;
  // display:flex;
  // flex-direction:row;
`
const LeftBar =styled.div`
  // display:flex;
  // flex-direction: row;
  // flex: 2;
  // align-items:center;
  // justify-content:space-between;
`
const RightBar = styled.div`
  // display:flex;
  // flex: 1;
  // align-items:center;
  // justify-content: flex-end;
`

// ============ Function ============== //
// ============ Layout
const TopNav =({

// ============ Props  
  cpadding="",
  cmarginB=50,
  children = <LoginDrop />,

})=>{
  
  // const router = useRouter();

// ============ Layout
  return (
    <Cont cpadding={cpadding} cmarginB={cmarginB} >
      <VerLogo />
      
      <Nav>
        <LeftBar>
          <NavText
            routeTo = "/"
          />
          <NavText 
            routeTo = "/Landlord"
            text="Landlord"
          />
          <NavText 
            routeTo = "/Chat"
            text="Chat"
          />
          <NavText 
            routeTo = "/Contact"
            text="Contact"
          />
        </LeftBar>

        <RightBar>
          {children}          
        </RightBar>
      </Nav>
    </Cont>
  );
}

export default TopNav;