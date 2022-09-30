import styled from 'styled-components';
import React from 'react';

import RadioButton from '../RadioButton';
import Checkbox from '../Checkbox';
import VeriButton from '../VeriButton';
import Button from '../Button'
import Para from '../Para'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import ImgBox from '../ImgBox'

// ============ CSS ============== //
const Cont = styled.div`
  min-width: ${props => props.minWidth};
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TopCont =styled.div`
  display:flex;  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 40px;
`

const ColCont = styled.div`
  width: 48%;
  display:flex;  
  flex-direction: column;
  align-items: felx-start;
  justify-content: center;
`

const MidCont=styled.div`
  display:flex;
  flex: 1;
  flex-direction: column;
  align-items: felx-start;
  justify-content: center;
  margin-bottom: 25px;
`

const BttmCont=styled.div`
  display:flex;
  flex: 1.5;
  flex-direction: column;
  align-items: felx-start;
  justify-content: center;
`

const FormBox = styled.form`
  width:${props => props.fwidth};
  height: ${props => props.fheight}; 
  display:flex;
  flex-direction: column;
  align-items: felx-start;
  justify-content: center;   
  margin-bottom: 80px;
`

const LabelFor = styled.label`
  font-size: ${props => props.fsize}px; 
  font-family: Montserrat;
  margin-bottom: 10px;
  margin-left: 20px;
  font-weight:600;
`;

const InputBox = styled.input`
  width:${props => props.iwidth};
  height: ${props => props.iheight}px; 
  border-radius: 20px;
  border: 3px solid #5333ED;
  font-size: 24px;
  padding: 16px;
  box-sizing: border-box;
  margin-bottom: ${props => props.imarginB}px;
  ::-webkit-input-placeholder {
    font-family: 'Heebo', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
`

const BttnCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

// ============ Function ============== //
const SignUpForm = ({
// ============ Prpos - others
  minWidth = "",  
  fwidth = "100%",
  fheight = "100%",
  fsize = 24,
  iwidth = "100%",
  iheight = 57,
  placeholder = "Type here...",

// =========== Prpos - Input titles
  typeText ="text", 
  typeEmail = "email",
  typePW ="password",
  titleFN = "First Name",  
  titleLN = "Last Name",
  titleEm = "Email",
  titleUN = "User Name",  
  titlePW="Password",
  titleCPW="Confirm Password",
  imarginB ="40",

}) => {  
	return(
// ============ Layout
		<Cont
      minWidth={minWidth}
    >
{/* // ============ Form starts */}
      <FormBox 
        fwidth={fwidth} 
        fheight={fheight}
      >
        <RadioButton />

        <TopCont> 
          <ColCont> 
            <LabelFor 
              for={titleFN} 
              fsize = {fsize}
            > {titleFN}</LabelFor>
            {/* input */}
            <InputBox 
              type={typeText} 
              name={titleFN} required 
              iwidth={iwidth} 
              iheight={iheight}
              placeholder={placeholder}
              imarginB={imarginB}              
            /> {/* first name */}
          </ColCont>

          <ColCont>
            <LabelFor 
              for={titleLN} 
              fsize = {fsize}
            > {titleLN}</LabelFor>
            {/* input */}
            <InputBox 
              type={typeText} 
              name={titleLN} required 
              iwidth={iwidth} 
              iheight={iheight}
              placeholder={placeholder}
              imarginB={imarginB}              
            />{/* last name */}
          </ColCont>    
          
        </TopCont>

        <MidCont> 
          <LabelFor 
            for={titleEm} 
            fsize = {fsize}
          > {titleEm}</LabelFor>
          {/* input */}
          <InputBox 
            type={typeEmail} 
            name={titleEm} required 
            iwidth={iwidth} 
            iheight={iheight}
            placeholder={placeholder}
            imarginB={imarginB}              
          />{/* email */}

          <LabelFor 
            for={titleUN} 
            fsize = {fsize}
          > {titleUN}</LabelFor>
          {/* input */}
          <InputBox 
            type={typeText} 
            name={titleUN} required 
            iwidth={iwidth} 
            iheight={iheight}
            placeholder={placeholder}
            imarginB={imarginB}
          />{/* user name */}

          <LabelFor 
            for={titlePW} 
            fsize = {fsize}
          > {titlePW}</LabelFor>
          {/* input */}
          <InputBox 
            type={typePW} 
            name={titlePW} required 
            iwidth={iwidth} 
            iheight={iheight}
            placeholder={placeholder}
            imarginB={imarginB}
          />{/* password */}

          <LabelFor 
            for={typePW} 
            fsize = {fsize}
          > {titleCPW}</LabelFor>
          {/* input */}
          <InputBox 
            type={typePW} 
            name={titleCPW} required 
            iwidth={iwidth} 
            iheight={iheight}
            placeholder={placeholder}
          />{/* confirm password */}
        </MidCont> 

{/* // ============ Checkbox */}
        <BttmCont>
          <Checkbox />
          <Checkbox 
            value = "I agree to the terms and agreement"
            required = "required"
          />

{/* // ============ Verification box */}
          <VeriButton 
            cMTop = "50"
            cMBttm = "0"
          /> 
        </BttmCont>  
      </FormBox> 

{/* // ============ Button */}
      <BttnCont>
        <Button 
          type ="cancel"
          text = "Cancle"
          margintop = "0px"
          width = "95%"
          marginright="30"
          minWidth="400"
          clickHandler="/Contact"
        />
        <Button 
          text = "Submit"
          margintop = "0px"
          border = "none"
          bgcolor = "#5333ED"
          color="#fff"
          hover = "box-shadow: none"
          width = "95%"
          minWidth="400"
          clickHandler=""
        />
      </BttnCont>
    </Cont>   
	)
}

export default SignUpForm;