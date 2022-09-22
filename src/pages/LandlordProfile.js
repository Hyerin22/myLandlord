import styled from "styled-components";
import React from "react";

// ============ Imported Comps ============== //
import ProfileSub from "../comps/ProfileSub";
import ShowAll from "../comps/ShowAll";
import UserDrop from "../comps/UserDrop";
import PropertyCard from "../comps/PropertyCard";
import ReviewCard from "../comps/ReviewCard";
import Footer from "../comps/Footer";
import Header from "../comps/Header";
import LandlordSub from "../comps/LandlordSub";
import RetangleAvatar from "../comps/RectangleAvatar";
import LandlordInfo from "../comps/LandlordInfo";
import SubHead from "../comps/SubHead";
import ChatIcon from "../comps/ChatIcon";
import RoutButton from "../comps/RoutButton";
import Navi from "../comps/Navi";

// ============ CSS ============== //
const Cont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4% 0 4%;
  box-sizing: border-box;
  align-items: center;
`;

const HeadCont = styled.div`
  padding: 4%;  
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const ButtCont = styled.div`
  margin-right: 3%;
  z-index: 1;
  margin-top: 10px;

  @media(max-width: 1000px){
    margin-top: 40px;
  }
`;

const ProfCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 70px;
  margin-top: 30px;
`;

const InfoCont = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const VeriCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 140px;

  @media(max-width: 1000px){
    margin-top: 80px;
  }
  
  @media(max-width: 500px){
    margin-top: 30px;
  }
`;

const CenterBox = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  padding: 0 4%;

  @media(max-width: 500px){
    margin-top: 30px;
  }
`;

const ReviewCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

// ============ Function ============== //
// ============ Layout
export default function LandlordProfile() {
  return (
    <Cont>
      {/* // ============ Top Navigation */}
      <Navi children={<UserDrop />} />

      {/* // ============ Landlord information */}
      <div>
        <HeadCont>
          <Header marginBottom="45px" text="Jasper White" />
          <ChatIcon />
        </HeadCont>

        <LandlordSub />
        <InfoCont>
          <RetangleAvatar />
          <InfoText>
            <SubHead
              text="Burnaby, BC."
              justifyContent="left"
              marginB="10"
              marginL="3%"
            />
            <LandlordInfo />
            <VeriCont>
              <LandlordInfo
                src="/icons/icon_verification.png"
                text="Email address"
              />
              <LandlordInfo
                src="/icons/icon_verification.png"
                text="Phone number"
              />
              <LandlordInfo
                src="/icons/icon_verification.png"
                text="Verify more info"
              />
            </VeriCont>
          </InfoText>
        </InfoCont>
        <ButtCont>
          <RoutButton margintop="0" text="Leave Review" routeTo="/Review" />
        </ButtCont>

        {/* // ============ Property information */}
        <ProfCont>
          <ProfileSub />
          <ShowAll />
          <CenterBox>
            <PropertyCard marginTop="25%" />
          </CenterBox>
        </ProfCont>

        {/* // ============ Reviews */}
        <ReviewCont>
          <ProfileSub text="Reviews" />
          <CenterBox>
            <ReviewCard review="The house was newly renovated, and the landlord cared about many things such as electricity and water tanks." />
          </CenterBox>
          <CenterBox>
            <ReviewCard text="SY" name="Sonia Yepez" />
          </CenterBox>
          <CenterBox>
            <ReviewCard
              text="CC"
              name="Corey Conyers"
              review="The house was quite old, but it was good that the landlord was not too involved in my life."
            />
          </CenterBox>
        </ReviewCont>
      </div>

      {/* // ============ Footer Navigation */}
      <Footer />
    </Cont>
  );
}
