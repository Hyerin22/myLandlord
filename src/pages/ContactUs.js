import styled from 'styled-components';
import React, {useState } from 'react';

// ============ Imported Comps ============== //
import Navi from '../comps/Navi';
import Header from '../comps/Header';
import Footer from '../comps/Footer';
import InputGroup from '../comps/InputGroup';
import LoginErrorBox from '../comps/LoginErrorBox';

// ============ CSS ============== //
const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0 4% 0 4%;
  box-sizing: border-box;
`
const ErrorCont = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  padding: 0 4% 0 4%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`

const InputCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

// ============ Function ============== //
// ============ Layout
export default function ContactUs() {
    
	function handleClick() {
		setShowPop(true)	
	}

	function handleClickClose(){
		setShowPop(false)
	}

	const [showpop, setShowPop] = useState(false)	

	return(
		<Cont>
{/* // ============ Top Navigation */}
      <Navi
      chatClick={() => handleClick()}
      />

{/* // ============ Content Start */}
      <InputCont> 
        <Header text = "Contact Us" marginLeft='4%'/>
        <ErrorCont> 
            {showpop === true && <LoginErrorBox 
                clickHandler={() => handleClickClose()}				
            />}
          </ErrorCont>
				<InputGroup />
			</InputCont>

{/* // ============ Bottom Navigation */}
      <Footer />
    </Cont>
	)
}