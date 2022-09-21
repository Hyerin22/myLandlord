import styled from 'styled-components';
import React, {useState } from 'react';

// ============ Imported Components ============== //
import Header from '../comps/Header';
import SubHead from '../comps/SubHead';
import Navi from '../comps/Navi';
import LoginErrorBox from '../comps/LoginErrorBox';
import SearchBar from '../comps/SearchBar';
import ImgBox from '../comps/ImgBox';
import EnhancedTable from '../comps/EnhancedTable'
import PaginationRow from '../comps/PaginationRow';
import Footer from '../comps/Footer';

// ============ CSS ============== //
const Cont = styled.div`
	display:flex;
	flex-direction: column;
	margin: 0;
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

const HeadCont = styled.div`
  display:flex;
  flex-direction: ${props=>props.flexDir}; 
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding-left: 1%;
  box-sizing: border-box;
`;

const MidCont = styled.div`
	display:flex;
	flex: 1;
  flex-wrap: wrap;
	flex-direction: column;
	justify-content:center;
	align-items:flex-start;
	margin-bottom: ${props=>props.cmarginB}; 
`

const SubText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-weight: 500;
  color: #000;
  text-align : left;
  margin: 0;
  overflow-wrap: break-word;
  margin-left: 2%;
  margin-bottom: 40px;

  @media(max-width: 500px){
    font-size: 22px;
  }
`;


// ============ Function ============== //
const Landlord = ({

// ============ Properties

  cmarginB = "50px",
  cmarginBttm = "0px",
  flexDir = "column",

})=>{
  
	function handleClick() {
		setShowPop(true)	
	}

	function handleClickClose(){
		setShowPop(false)
	}

	const [showpop, setShowPop] = useState(false)	

// ============ Layout
	return(
		<Cont>
{/* // ============ Top Navigation */}
			<Navi
        chatClick={() => handleClick()}
        />

{/* // ============ MAP */}

      <MidCont cmarginB={cmarginB}>
        <HeadCont flexDir={flexDir}>
          <Header text="Landlord" marginBottom = "40px"/>
          <ErrorCont> 
            {showpop === true && <LoginErrorBox 
                clickHandler={() => handleClickClose()}				
            />}
          </ErrorCont>
        </HeadCont>
        <SubText>Which area do you want to search?</SubText>
        <SearchBar marginL="2"/>

{/* it is a image with img tag */}
        <ImgBox 
          cwidth="100%" 
          cheight="auto"
          src="./images/img_map.png"
          marginL="%"
          objectFit='cover'
        />
      </MidCont>

{/* // ============ LIST OF LANDLORD */} 
      <MidCont cmarginB = {cmarginBttm}>
        <HeadCont flexDir={flexDir}>
          <Header text="List of Landlord" cMinWidth = "600px" marginBottom = "40px"/>
        </HeadCont>

        <SubText>Who do you want to search?</SubText>
        <SearchBar
          placeholder="Please type your landlord name or address.."
          marginL="2"
        />

        <EnhancedTable />

        {/* <PaginationTest /> */}
        <PaginationRow />
          
      </MidCont>

{/* // ============ Bottom Navigation */}
      <Footer />
    </Cont> 
  )
}

export default Landlord;