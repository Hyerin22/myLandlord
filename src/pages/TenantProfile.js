import styled from 'styled-components';
import React from 'react';
import router from 'next/router';

// ============ Imported Comps ============== //
import ProfileSub from '../comps/ProfileSub';
import UserDrop from '../comps/UserDrop';
import Footer from '../comps/Footer';
import Header from '../comps/Header';
import LandlordSub from '../comps/LandlordSub';
import RetangleAvatar from '../comps/RectangleAvatar';
import LandlordInfo from '../comps/LandlordInfo';
import SubHead from '../comps/SubHead';
import ReviewCardImg from '../comps/ReviewCardImg';
import Navi from '../comps/Navi';
import TenantInfo from '../comps/TenantInfo';


// ============ CSS ============== //
const Cont = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 4% 0 4%;
    box-sizing: border-box;
`;

const HeadCont = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

const IconCont = styled.a`
  display: block;
  width: 84px;
  height: 84px;
  border: none;
  border-radius: 50%; 
  bottom: 30px;

  :hover{
    transform: scale(0.95);
    transition-duration: 0.5s;    
`

const Icon = styled.img`
    display: block;
    object-fit: cover;
    width: 84px;
    height: 84px;
    border-radius: 50%;  
`;

const ProfCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

const InfoCont = styled.div`
    display: flex;
    justify-content: center;
`;
    
const InfoText = styled.div`
    display: flex;
    flex-direction: column;
`;

const VeriCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 230px;
    box-sizing: border-box;
`;

const CenterBox = styled.div`
    display:flex;
    margin-top: 50px;
    justify-content: center;
    align-items:center;
`;

// ============ Function ============== //
// ============ Layout
export default function TenantProfile() {
    return(
        <Cont>

{/* // ============ Top Navigation */}
            <Navi children = {<UserDrop/>} />

{/* // ============ Landlord information */}
            <HeadCont>
                <Header marginBottom="45px" marginLeft="3%" text="Nancy J. Rojas"/>
                <IconCont onClick={()=>router.push('/TenantEdit')}> 
                    <Icon src="/icons/icon_edit.png"/>
                </IconCont>
            </HeadCont>

            <LandlordSub
                text ="Joined in October 2018"
            />

            <InfoCont>
                <RetangleAvatar 
                    src="/images/img_tenant.png"
                    marginTop = "2"
                />
                <InfoText>
                    <SubHead 
                        text="Burnaby, BC." 
                        fontSize="24" 
                        justifyContent="left" 
                        marginB="10" 
                        marginL="3%"
                    />
                    <LandlordInfo 
                        text = "3 reviews"
                    />

                    <VeriCont>
                        <TenantInfo />
                        <TenantInfo title = "Phone Number : " text="604-434-3245"/>
                    </VeriCont> 
                </InfoText>
            </InfoCont>

{/* // ============ Reviews */}
            <ProfCont>
                <ProfileSub text="Reviews"/>
                <CenterBox>
                    <ReviewCardImg 
                    bgImage='url("/images/img_avatar_malcom.png")'
                    text=""
                    cborder="none"
                    name="Landlord: Malcolm Christie"
                    select="Selected: 6379 Longheed Hwy"
                    review="I lived this home for about 1 year last year,, and it ways horrible... The room is dirty, the maintenance was not what I expected."
                    boldDate="29 Sep 2021 19:01"
                    routeTo=""
                    />
                </CenterBox>
                <CenterBox>
                    <ReviewCardImg 
                    bgImage='url("/images/img_avatar_ruzica.png")'
                    text=""
                    cborder="none"
                    name="Landlord: Ruzica Adamovic" 
                    select="Selected: 101-5000 Imperial St"
                    review="I lived this home for about 2 year last year,, and it I had a really great memory in her. The landlord is so kind and reasonable. So..."
                    boldDate="15 Sep 2020 19:01"
                    routeTo=""
                    />
                </CenterBox>
                <CenterBox>
                    <ReviewCardImg 
                    bgImage='url("/images/img_avatar_xiu.png")'
                    text=""
                    cborder="none"
                    name="Landlord: Xiu Juan Chiu" 
                    select="Selected: 290 Fell Ave"
                    review="I love this landlord!! She was sooo great. She was so helpful. Because I was new in Vancouver, she gave me all the information tha..."
                    boldDate="10 Oct 2018 19:01" 
                    routeTo=""
                    />
                </CenterBox>
            </ProfCont>
            
{/* // ============ Footer Navigation */}
            <Footer />
        </Cont>
    )
}