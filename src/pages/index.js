import styled from "styled-components";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ============ Imported Comps ============== //
import SubHead from "../comps/SubHead";
import VerLogo from "../comps/VerLogo";
import Mediabox from "../comps/Mediabox";
import HeroImage from "../comps/HeroImage";
import Features from "../comps/Features";
import Footer from "../comps/Footer";
import Navi from "../comps/Navi";
import LoginErrorBox from "../comps/LoginErrorBox";

// ============ CSS ============== //
const Cont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const NavCont = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const MidCont = styled.div`
  margin-bottom: 100px;
  padding: 0 4% 0 4%;
  box-sizing: border-box;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;

const RightBox = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
`;

const HeroCont = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 100px;
`;

const FeatSec = styled.div`

`;

const CenterCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
	margin: 5px;
`;
const FeatCont = styled.div`
	display: flex;
	flex-wrap: wrap;
	
	@media(min-width: 1000px){
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 15px;
		
		padding: 0px 40px;
	}
`;

const WelcomeText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 26px;
  font-weight: 500;
  color: #000;
  text-align: center;
  line-height: 29px;
  margin: 0;
  overflow-wrap: break-word;
  margin-bottom: 25px;

  @media (max-width: 1000px) {
    font-weight: 600;
  }
`;

// ============ Function ============== //
// ============ Layout
export default function Home() {
  // ============ UseEffect - animation
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  function handleClick() {
    setShowPop(true);
  }

  function handleClickClose() {
    setShowPop(false);
  }

  const [showpop, setShowPop] = useState(false);

  return (
    <Cont>
      {/* // ============ Top Navigation */}
      <NavCont>
        <Navi chatClick={() => handleClick()} />
      </NavCont>

      {/* // ============ Body Starts */}
      <MidCont>
        {showpop === true && (
          <LoginErrorBox clickHandler={() => handleClickClose()} />
        )}
        <LeftBox>
          {/* <Logo src="/images/logo_vertical.png" alt="MyLandlord logo" /> */}
          {/* <VerLogo 
						marginbttm = "20"
						routeTo=""
						cursor="default"                        
					/> */}
          <WelcomeText>Welcome! We are a landlord review platform</WelcomeText>
          <SubHead
            text="You can write a review for your landlord right now"
            fontSize="20"
            lineHeight="39"
          />
          <SubHead
            text="Or check out the review of landlords in BC"
            fontSize="20"
            lineHeight="39"
          />
        </LeftBox>
        <RightBox>
          <Mediabox />
        </RightBox>
      </MidCont>

      {/* // ============ Hero Image */}
      <HeroCont>
        <HeroImage />
      </HeroCont>

      {/* // ============ Features */}
      <FeatSec>
        <SubHead text="Discover Features" marginB="40" />

        <FeatCont>
          <CenterCont>
            <Features src="./images/img_review.gif" />
          </CenterCont>
          <CenterCont>
            <Features
              src="./images/img_comm.gif"
              title="Easy Communication"
              para="Users can contact any landlords if they are online on the landlord profile section."
            />
          </CenterCont>
          <CenterCont>
            <Features
              src="./images/img_rating.gif"
              title="Strong Rating System"
              para="Users can review their landlord by the rating system."
            />
          </CenterCont>
        </FeatCont>
      </FeatSec>

      {/* // ============ Bottom Navigation */}
      <NavCont>
        <Footer />
      </NavCont>
    </Cont>
  );
}
