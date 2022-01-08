import React, {useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// ============ Imported Comps ============== //
import Navi from '../comps/Navi';
import Header from '../comps/Header';
import Footer from '../comps/Footer';
import SubHead from '../comps/SubHead';
import RatingStar from '../comps/RatingStar';
import Button from '../comps/Button';
import RoutButton from '../comps/RoutButton';
import LoginErrorBox from '../comps/LoginErrorBox';

const ErrorCont = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  padding: 0 4% 0 4%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`


// ============ Function ============== //
// ============ Layout
export default function Review() {
	const router = useRouter();

    
	function handleClick() {
		setShowPop(true)	
	}

	function handleClickClose(){
		setShowPop(false)
	}

	const [showpop, setShowPop] = useState(false)	

	return(
		<div className = "container">
{/* // ============ Top Navigation */}
      <Navi
        chatClick={() => handleClick()}
      />

{/* // ============ Content Start */}

{/* Title */}
      <div className="header_cont"> 
        <Header text = "Review" marginLeft="0" marginBottom="45px"/>
        <ErrorCont> 
            {showpop === true && <LoginErrorBox 
              clickHandler={() => handleClickClose()}				
            />}
          </ErrorCont>
        <SubHead 
          text="Describe your experience" 
          fontSize="36"      
        />
        <h3>You can describe any your experience with your previous or current landlord!</h3>
			</div>

{/* ===== Form starts here ===== */}
      <form className="formCont">

  {/* Textarea */}
        <div className = "section_cont no-padding">
          <textarea className="textarea" name="message" rows="10" cols="30" placeholder="type here..."></textarea>
        </div>

  {/* Reviews */}
        <div className = "section_cont flex-start">
          <ul id ="review_list">
            <li>
              <h2>Housing maintenance</h2>
              <h3>How was the condition of the place?</h3>
              <RatingStar name="maintenance_rating" />
            </li>
            <li>
              <h2>Cleanliness</h2>
              <h3>Was the place clean?</h3>
              <RatingStar name="cleanliness_rating" id="cleanliness_rating" />
            </li>
            <li>
              <h2>Availability</h2>
              <h3>Was the length of renting period reasonable?</h3>
              <RatingStar name="availability_rating" />
            </li>
            <li>
              <h2>Communication</h2>
              <h3>How was communication?</h3>
              <RatingStar name="communication_rating" />
            </li>
            <li>
              <h2>Would you recommend this landlord to others?</h2>
              <div className = "thumb_con flex-row">
                <label for ="yes" class="flex-row thumb thumbup">
                  <input 
                    type="radio" 
                    name="is_recommended" 
                    value={1} 
                    checked
                    className = "thumb_rad"
                  />
                  <img src = "/icons/icon_thumbup.svg" alt = "yes" />
                  Yes
                </label>
                
                <label for ="no" class="flex-row thumb thumbdown">
                  <input 
                    type="radio" 
                    name="is_recommended" 
                    value={0}
                    className = "thumb_rad"
                  />                    
                  <img src = "/icons/icon_thumbdown.svg" alt = "yes" />
                  No
                </label>          
              </div>
            </li>
          </ul>
        </div>

  {/* Submit buttons */}
        <div className = "grid bttn_cont">
          <RoutButton 
            text="Cancel"
            routeTo = "/LandlordProfile"
            margintop={0}
          />
          <Button
            cwidth = "48%"
            text = "Submit"
            margintop = "0px"
            border = "none"
            bgcolor = "#5333ED"
            color="#fff"
            hover = "box-shadow: none"
            width = "100%"
            minWidth="400"
          />
        </div>

      </form>


{/* // ============ Bottom Navigation */}
      <Footer />
    </div>
	)
}
