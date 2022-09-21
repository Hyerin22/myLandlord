import styled from "styled-components";
import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

// ============ Imported Comps ============== //
import Button from "../Button";
import Para from "../Para";
import ImgBox from "../ImgBox";
import RoutButton from "../RoutButton";

// ============ CSS ============== //
const Cont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  flex-wrap: wrap;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    display: block;
  }
`;

const LeftCont = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 50px;

  @media (max-width: 1000px) {
    margin-right: 0;
    width: 80%;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 500px) {
    margin-right: 0;
    justify-content: center;
    align-items: center;
  }
`;

const RightCont = styled.div`
  display: flex;
  flex: 1.5;
  flex-direction: column;
  align-items: felx-start;
  justify-content: center;

  @media (max-width: 500px) {
    margin-right: 0;
    width: 90%;
    justify-content: center;
    align-items: center;
  }
`;

// ============ Form
const FormBox = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: felx-start;
  justify-content: center;
`;

const LabelFor = styled.label`
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 10px;
  margin-left: 20px;
  font-weight: 600;

  @media (max-width: 500px) {
    font-size: 20px;
    margin: 0px 0px 10px 0px;
  }
`;

const InputBox = styled.input`
  width: 100%;
  height: 57px;
  border-radius: 20px;
  border: 3px solid #5333ed;
  font-size: 24px;
  padding: 16px;
  box-sizing: border-box;
  margin-bottom: 40px;
  ::-webkit-input-placeholder {
    font-family: "Heebo", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const BttnCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 80px;
  align-items: center;

  @media (max-width: 500px) {
    // flex-direction: column;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
  }
`;

// ============ Function ============== //
const InputGroup = ({
  // ============ Properties
  placeholder = "Type here...",

  // ===========Input titles
  titleOne = "First Name",
  typeOne = "text",
  titleTwo = "Last Name",
  typeTwo = "text",
  titleThree = "Email address",
  typeThree = "text",
  titleFour = "Phone Number (Optional)",
  typeFour = "text",
  titleFive = "Let us know what your issue is",
}) => {
  // ============ Layout
  return (
    <Cont>
      <FormBox>
        <TopCont>
          {/* // ============ Image */}
          <LeftCont>
            <ImgBox
              src="./images/ani_ContactUs.gif"
              cheight="100%"
              cwidth="100%"
              cmargin="0 60px 0 0"
            />
          </LeftCont>

          {/* // ============ Inputs */}
          <RightCont>
            <LabelFor for={titleOne}> {titleOne}</LabelFor>
            <InputBox
              type={typeOne}
              name={titleOne}
              required
              placeholder={placeholder}
            />

            <LabelFor for={titleTwo}> {titleTwo}</LabelFor>
            <InputBox
              type={typeTwo}
              name={titleTwo}
              required
              placeholder={placeholder}
            />

            <LabelFor for={titleThree}> {titleThree}</LabelFor>
            <InputBox
              type={typeThree}
              name={titleThree}
              required
              placeholder={placeholder}
            />

            <LabelFor for={titleFour}> {titleFour}</LabelFor>
            <InputBox
              type={typeFour}
              name={titleFour}
              required
              placeholder={placeholder}
            />
          </RightCont>
        </TopCont>

        {/* // ============ Textarea */}
        <LabelFor for={titleFive}> {titleFive}</LabelFor>
        <TextareaAutosize
          maxRows={10}
          minRows={8}
          aria-label="maximum height"
          placeholder="Type here..."
          style={{
            width: "100%",
            padding: "20px",
            boxSizing: "border-box",
          }}
        />
        <Para
          fontSize="18"
          text="250 words max"
          align="right"
          fcolor="#6E7076"
          marginT="5"
          paddingR="10"
        />

        {/* // ============ Buttons */}
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
          {/* <Button
            type="cancel"
            text="Cancel"
            margintop="0px"
            cwidth="48%"
            width="95%"
            marginright="30"
            minWidth="400"
            routeTo="/"
            justify="flex-end"
          />
          <Button
            text="Submit"
            margintop="0px"
            border="none"
            bgcolor="#5333ED"
            color="#fff"
            hover="box-shadow: none"
            cwidth="48%"
            width="95%"
            minWidth="400"
            routeTo=""
            justify="flex-start"
          /> */}
        </BttnCont>
      </FormBox>
    </Cont>
  );
};

export default InputGroup;
