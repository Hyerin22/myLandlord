import styled from 'styled-components';
import React from 'react';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

// ============ CSS ============== //
const HeaderCont = styled.div`
	// width: ${props=>props.cwidth};
	// display:flex;
	// flex: 0.3;
	justify-content:${props=>props.justifyContent};
	align-items:${props=>props.alignItems};
	white-space: nowrap;
`;

const Text = styled.p`
	font-family: 'Montserrat', sans-serif;
	font-size: 45px;
	margin-bottom:40px;
	// margin-left:4%;
	font-weight: 500;
	color:#000;

	@media(max-width: 1000px){
    font-size: 35px
  }

  @media(max-width: 500px){
		font-size: 30px;
  }
`;

// ============ Function ============== //
const Header = ({
	
// ============ Props
	cwidth="100%",
	text="Log In",
	justifyContent="flex-start",
	alignItems="center",
}) => {
	
// ============ Layout
	return(
		<HeaderCont 
			cwidth={cwidth} 
			justifyContent={justifyContent} 
			alignItems={alignItems} 
		>
			<Text>
				{text}
			</Text>
		</HeaderCont>
	);
}

export default Header;