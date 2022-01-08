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
	margin:0;
	margin-bottom: ${props=>props.marginB}px;
	margin-top: ${props=>props.marginT}px;
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
    >
      {text}
    </Text>
	);
}

export default Para;