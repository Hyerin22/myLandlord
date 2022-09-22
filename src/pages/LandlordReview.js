import styled from "styled-components";
import React, { useState } from "react";

// ============ Imported Components ============== //
import Header from "../comps/Header";
import SubHead from "../comps/SubHead";
import Navi from "../comps/Navi";
import LoginErrorBox from "../comps/LoginErrorBox";
import Footer from "../comps/Footer";
import RatingStar from "../comps/RatingStar";
import RoutButton from "../comps/RoutButton";

// ============ CSS ============== //
const Cont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 4% 0 4%;
  box-sizing: border-box;
  align-items: center;
`;
const ErrorCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 4% 0 4%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

const HeadCont = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDir};
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
`;

const MidCont = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: ${(props) => props.cmarginB};
  padding-left: 6%;
`;

const SubText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 500;
  color: #000;
  text-align: left;
  margin: 0;
  overflow-wrap: break-word;
  margin-left: 2%;
  margin-bottom: 40px;

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;

const TextAreaCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 70px;
  padding: 0 4%;
`;

const TextArea = styled.textarea`
  width: 1000px;
  height: 245px;
  border: 3px solid #5333ed;
  background: none;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 2%;

  @media (max-width: 1000px) {
    width: 700px;
  }
  @media (max-width: 500px) {
    width: 350px;
    height: auto;
  }
`;

const QuestionCont = styled.div`
  margin-top: 0px;
  margin-bottom: 20px;
`;

const BottCont = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex-wrap: wrap;
box-sizing: border-box;
`;

const BttnCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 70px;

  margin-top: 80px;
  align-items: center;

  @media (max-width: 500px) {
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    grid-column-gap: 20px;
  }
`;

// ============ Function ============== //
const LandlordReview = ({
  // ============ Properties

  cmarginB = "50px",
  cmarginBttm = "0px",
  flexDir = "column",
}) => {
  function handleClick() {
    setShowPop(true);
  }

  function handleClickClose() {
    setShowPop(false);
  }

  const [showpop, setShowPop] = useState(false);

  // ============ Layout
  return (
    <Cont>
      {/* // ============ Top Navigation */}
      <Navi chatClick={() => handleClick()} />

      {/* // ============ MAP */}

      <MidCont cmarginB={cmarginB}>
        <HeadCont flexDir={flexDir}>
          <Header text="Review" marginBottom="40px" />
          <ErrorCont>
            {showpop === true && (
              <LoginErrorBox clickHandler={() => handleClickClose()} />
            )}
          </ErrorCont>
        </HeadCont>
        <SubHead text="Describe your experience" />
        <SubHead
          text="You can describe any your experience with your previous or current landlord!"
          marginB=" 30"
          align="left"
        />

        <TextAreaCont>
          <TextArea
            name="message"
            placeholder="type here..."
            rows={10}
            cols={30}
          />
        </TextAreaCont>

        <QuestionCont>
          <Header text="Housing maintenance" />
          <SubHead
            justifyContent="left"
            text="How was the condition of the place?"
            marginB="18"
          />
          <RatingStar name="maintenance_rating" />
        </QuestionCont>

        <QuestionCont>
          <Header text="Cleanliness" />
          <SubHead
            justifyContent="left"
            text="Was the place clean?"
            marginB="18"
          />
          <RatingStar name="maintenance_rating" />
        </QuestionCont>

        <QuestionCont>
          <Header text="Availability" />
          <SubHead
            justifyContent="left"
            align="left"
            text="Was the length of renting period reasonable?"
            marginB="18"
          />
          <RatingStar name="maintenance_rating" />
        </QuestionCont>

        <QuestionCont>
          <Header text="Communication" />
          <SubHead
            justifyContent="left"
            text="How was communication?"
            marginB="18"
          />
          <RatingStar name="maintenance_rating" />
        </QuestionCont>
        <QuestionCont>
          <Header text="Would you recommend this landlord to others?" />
        </QuestionCont>
        <div className="thumb_con flex-row">
          <label for="yes" class="flex-row thumb thumbup">
            <input
              type="radio"
              name="is_recommended"
              value={1}
              checked
              className="thumb_rad"
            />
            <img src="/icons/icon_thumbup.svg" alt="yes" />
            Yes
          </label>

          <label for="no" class="flex-row thumb thumbdown">
            <input
              type="radio"
              name="is_recommended"
              value={0}
              className="thumb_rad"
            />
            <img src="/icons/icon_thumbdown.svg" alt="yes" />
            No
          </label>
        </div>
      </MidCont>

      <BottCont>
        <BttnCont>
          <RoutButton
            text="Cancel"
            bgcolor="#ffffff"
            color="black"
            margintop={0}
            routeTo="/SignUp"
          />
          <RoutButton
            text="Submit"
            color="#ffffff"
            bgcolor="#5333ED"
            margintop={0}
            routeTo="/SignUp"
          />
        </BttnCont>

      </BottCont>

      {/* // ============ Bottom Navigation */}
      <Footer />
    </Cont>
  );
};

export default LandlordReview;
