import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const HeaderCont = styled.div`
	display:flex;
	justify-content:${props=>props.justifyContent};
	width: ${props=>props.cWidth};
	margin-right: ${props=>props.cmarginR};
	padding: ${props=>props.cpadding};
	margin-bottom: ${props=>props.marginB}px;
	margin-left: ${props=>props.marginL};
`;

const Text = styled.p`
	font-family: 'Montserrat', sans-serif;
	font-size: 25px;
	font-weight: ${props=>props.fontWeight};
	color: ${props=>props.fcolor};	
	text-align: ${props=>props.align};
	line-height: ${props=>props.lineHeight}px;
	margin:0;	
	white-space: nowrap;

	@media(max-width: 1000px){
		font-size: 20px;
		white-space: normal;
		
	}

	@media(max-width: 500px){
		font-size: 16px;
		white-space: normal;
	}
`;

// ============ Function ============== //
// ============ Props
const Subhead = ({
	justifyContent = "center",
	cWidth = "",
	cmarginR = "",
	marginL = "",
	text="Log In",
	cpadding ="",
	fontWeight = 400,
	fcolor="#000",
	align="center",
	lineHeight = "",
	marginB=""
}) => {

// ============ Layout
	return(
		<HeaderCont
			justifyContent={justifyContent}
			cWidth={cWidth}
			cmarginR={cmarginR}
			cpadding={cpadding}
			marginB={marginB}
			marginL={marginL}
		>
			<Text 
				fontWeight={fontWeight}
				fcolor={fcolor}
				align={align}
				lineHeight={lineHeight}				
			>
				{text}
			</Text>
		</HeaderCont>
	);
}

export default Subhead;