import styled from "styled-components";
import React from "react";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import RatingStar from "../RatingStar";
import { Select } from "@mui/material";

// ============ CSS ============== //
const BoxCont = styled.div`
  display: flex;
  justify-content: ceter;
  align-items: center;
`;

const RevBox = styled.div`
  width: 1000px;
  height: 245px;
  border: 3px solid #5333ed;
  background: none;
  border-radius: 16px;

  @media (max-width: 1000px) {
    width: 700px;
  }

  @media (max-width: 500px) {
    width: 350px;
    height: auto;
  }
`;

const Cont = styled.div`
  position: relative;
  display: flex;

  @media (max-width: 500px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const RatingCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 5%;

  @media (max-width: 500px) {
    margin: 0;
    justify-content: center;
    align-items: center;
  }
`;

const BoldText = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  margin-bottom: 3px;
  font-family: Heebo;

  @media (max-width: 500px) {
    text-align: center;
  }
`;

const RegText = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  margin-top: 5px;
  margin-bottom: 0;
  font-family: Heebo;
  
  @media (max-width: 500px) {
    padding: 0px 20px 10px 20px;
    text-align: center;
  }
`;

const DateTextCont = styled.div`
  display: flex;

  @media (max-width: 500px) {
    margin: 0;
    justify-content: flex-end;
    margin-top: 10px;
    padding: 10px;
  }
`;
const DateText = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  margin-bottom: 3px;
  margin-right: 15px;
  font-family: Heebo;
  white-space: nowrap;

  @media (max-width: 1000px) {
    font-size: 16px;
    margin-left: 10px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    margin: 0;
  }
`;

// TextAvatar
const TextAvatarCont = styled.div`
  display: flex;
  justify-contents: center;
  item-align: center;
  margin-top: 4.5%;
  margin-left: 3%;

  @media (max-width: 500px) {
    margin: 4.5% 0%;
    justify-content: center;
  }
`;

const Circle = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-left: 4%;
  margin-top: 0px;
  border: 4px solid #5333ed;
  display: relative;
  background-image: ${(props) => props.bgImage};
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    width: 90px;
    height: 90px;
  }
`;

const CircleId = styled.p`
  display: flex;
  font-size: 32px;
  font-weight: 400;
  color: #5333ed;
  justify-content: center;
  margin-top: 38%;
  font-family: Heebo;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

// ============ Function ============== //
const ReviewCard = ({
  // ============ Props
  name = "Adam Biebe",
  select = "Selected: 5435 Kincaid St",
  review = "I lived this home for about 1 year last year, and it ways horrible. The room is dirty, the maintenance was not what I expected.",
  boldDate = "19 Jan 2017 19:01",
  text = "AB",
  bgImage = "",
}) => {
  // ============ Layout
  return (
    <BoxCont>
      <RevBox>
        <Cont>
          <LeftSide>
            <TextAvatarCont>
              <Circle>
                <CircleId>{text}</CircleId>
              </Circle>
            </TextAvatarCont>
            <RatingCont>
              <RatingStar />
              <BoldText>{name}</BoldText>
              <RegText>{select}</RegText>
              <RegText>{review}</RegText>
            </RatingCont>
          </LeftSide>
          <DateTextCont>
            <DateText>{boldDate}</DateText>
          </DateTextCont>
        </Cont>
      </RevBox>
    </BoxCont>
  );
};

export default ReviewCard;
