import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';
import Link from '@mui/material/Link';

// ============ Imported comps ============== //
import SubHead from '../SubHead';
import Para from '../Para';

// ============ CSS ============== //
const ErrorCont = styled.div`
  width: 50%;
  display:flex;
  flex-direction: column;
  align-items:center;
  item-alignment: center;
  border-radius: 50px;
  box-shadow: ${props=>props.cbshadow}; 
  padding: 76px 94px;
`;

const MidCont = styled.div`
  display:flex;
  flex-direction: row;
  align-items:flex-end;
  item-alignment: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
`
const LeftCont = styled.div`
  display:flex;  
  flex: 1;
  flex-direction: column;
  align-items:center;
  item-alignment: center; 
`
const RightCont = styled.div`
  display:flex;  
  flex: 1;
  flex-direction: column;
  align-items:center;
  item-alignment: center; 
`
// button
const BttnCont = styled.div`
  width: 100%;
  display:flex;  
  flex-direction: column;
  align-items:center;
  item-alignment: center; 
  margin-right: ${props=>props.marginR}px; 
  margin-bottom: 20px; 
  box-sizing: border-box; 
`

const ButtonInput = styled.button`
  width: ${props=>props.width};
  height: ${props=>props.height}px;
  padding: 5px 70px;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  background-color:${props=>props.bg};
  border: ${props=>props.border};
  border-radius:${props=>props.radius}px;
  
  font-size: ${props=>props.size}px;    
  box-shadow: ${props=>props.bshadow};   

  :hover{
    transform: scale(0.95);
    transition-duration: 0.5s;       
  }
`;

const ButtonText = styled.p`
  font-family: 'Heebo', sans-serif;  
  color:${props=>props.color} ;
  font-size: ${props=>props.fontSize};
  text-align:center;
  font-weight: ${props=>props.fontWeight};
`;

const BttmCont = styled.div`  
  display:flex;
  flex: 1;
  flex-direction: row;
  align-items:center;
  item-alignment: center; 
`

// ============ Function ============== //
const NotiBox = ({

// ============ Props
  errortext = "Still can’t find the email?",
  marginR = 20,
  rmarginR=0,
  text="Resend Email",
  rtext="Back to Home",
  lbgcolor = "#fff",
  bgcolor = "#5333ED",
  radius = 20,
  width ="100%",
  height = 72,
  border = "solid 5px #5333ED",
  rborder = "none",
  cbshadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  bshadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
  color="#5333ED",
  rcolor = "#fff",
  fontSize="24px",
  fontWeight="500",

// ============ Button functions
  onButtonInteract=()=>{},
  routeTo = "/",
  crouteTo ="/Contact",
}) => {

// ============ Router
  const router = useRouter();

// ============ Layout
  return (
    <ErrorCont 
      onClick={()=>router.push(routeTo)}
      cbshadow={cbshadow}
    >
      <Para 
        width = "95%"
        marginB="60"
        align = "center"
        fontWeight = "500"
        fontSize = "24"
        text="We have sent an email to your email address. 
        Just click on the link in that email to complete your signup.
        If you don’t see it, you may need to check your spam forlder."
      />
      
{/* // ============ Buttons */}
      <MidCont>
        <LeftCont>
          <SubHead 
            text = {errortext}
            marginB="10"
            fontSize = "22"
            fontWeight = "600"
          />

{/*  // ============ Resend email button */}
          <BttnCont marginR={marginR}>            
            <ButtonInput 
              bg={lbgcolor} 
              radius={radius} 
              width={width} 
              height={height}
              bshadow={bshadow}
              border={border}   
              onClick={()=> {onButtonInteract();}}           
            >          
              <ButtonText
                color={color}
                fontSize={fontSize}
                fontWeight={fontWeight}                
              >
                {text}
              </ButtonText>
            </ButtonInput>
          </BttnCont>
        </LeftCont>          

{/* // ============ Back to Home button */}
        <RightCont> 
          <BttnCont marginR={rmarginR}>
            <ButtonInput 
              bg={bgcolor} 
              radius={radius} 
              width={width} 
              height={height}
              bshadow={bshadow}
              border={rborder}
              onClick={()=>router.push(routeTo)}
            >          
              <ButtonText
                color={rcolor}
                fontSize={fontSize}
                fontWeight={fontWeight}
              >
                {rtext}
              </ButtonText>
            </ButtonInput>
          </BttnCont> 
        </RightCont>          
      </MidCont>

{/* // ============ Link */}
      <BttmCont>
        <SubHead 
          text = {" Need help?"}
          fontSize = "20"
          fontWeight = "600"
          cmarginR = "15px"
        />
        <Link 
          component="button"
          onClick={()=>router.push(crouteTo)} 
          underline="always"
          fontFamily = "'Montserrat', sans-serif"
          fontSize = "20px"
          fontWeight = "600"
          color="#000"
        >
          {'Contact Us.'}
        </Link>
      </BttmCont>     

    </ErrorCont>
  );
}

export default NotiBox;