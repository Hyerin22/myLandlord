import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const Text = styled.p`
  width: ${props=>props.width};
	font-family: 'Heebo', sans-serif;  
	font-size: ${props=>props.fontSize}px;
	font-weight: ${props=>props.fontWeight};
	color: ${props=>props.fcolor};	
	text-align: ${props=>props.align};
	line-height: ${props=>props.lineHeight};
	margin-bottom: ${props=>props.marginB}px;
	margin-top: ${props=>props.marginT}px;
	padding-right: ${props=>props.paddingR}px;
`;

// ============ Function ============== //
const Para = ({

// ============ Props
  width="100%",
	text="Tenants can write reviews on the current or previous landlord.",
	fontSize= 16,
	fontWeight = 400,
	fcolor="#000",
	align="left",
	lineHeight = "1.5em",
	marginB="",
	marginT="",
	paddingR =""
}) => {


// ============ Layout
	return(
    <Text 
      width={width}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fcolor={fcolor}
      align={align}
      lineHeight={lineHeight}
      marginB={marginB}
			marginT={marginT}
			paddingR = {paddingR}
    >
      {text}
    </Text>
	);
}

export default Para;