import styled from 'styled-components';
import React from 'react';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

// ============ CSS ============== //
const HeaderCont = styled.div`
	width: ${props=>props.cwidth};
	display:flex;
	flex: 0.3;
	justify-content:${props=>props.justifyContent};
	align-items:${props=>props.alignItems};
	min-width:420px;
`;

const Text = styled.p`
	font-family: 'Montserrat', sans-serif;
	font-size: 50px;
	margin-bottom:${props=>props.marginBottom};
	margin-left:${props=>props.marginLeft};
	font-weight: 500;
	color:#000;

	@media(max-width: 1000px){
    font-size: 40px
  }

  @media(max-width: 500px){
		font-size: 30px;
  }
`;

// ============ Function ============== //
const Header = ({
	
// ============ Props
	cwidth="100%",
	cMinWidth = "400px",
	text="Log In",
	justifyContent="flex-start",
	alignItems="center",
	marginLeft="1%",
	marginBottom="70px"
}) => {
	
// ============ Layout
	return(
		<HeaderCont 
			cwidth={cwidth} 
			cMinWidth={cMinWidth}
			justifyContent={justifyContent} 
			alignItems={alignItems} 
		>
			<Text
					marginLeft={marginLeft}
					marginBottom={marginBottom}>
				{text}
			</Text>
		</HeaderCont>
	);
}

export default Header;