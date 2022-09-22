import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const BoxCont = styled.div`
    display:flex;
    justify-content:ceter;
    align-items:center;
`;

const Box = styled.div`
    width: 1000px;
    height: 245px;
    border: 3px solid #5333ED;
    background: none;
    border-radius: 16px;

    @media(max-width:1000px){
        width: 700px;
    }
    @media(max-width:500px){
        width: 350px;
        height: auto;
    }
`;

const Cont = styled.div`
    display: flex;
    
    @media(max-width:500px){
        justify-content: center;
        flex-direction: column;
    }
`
const Img = styled.img`
    width: 196px;
    height: 130px;
    margin-left: 4%;
    margin-top: 11%;

    @media(max-width:500px){
        margin: 25px 0px 0px 0px;
        justify-content: center;
        align-items: center;
    }
`;

const TextCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;

    @media(max-width:500px){
        margin: 0;
        text-align: center;

    }
`;
const BoldText = styled.p`
    font-weight: 600;
    font-size: 24px;
    color: #000000;
    margin-bottom: 3px;
    font-family: Heebo;
    margin-top: ${props => props.marginTop};

    @media(max-width:1000px){
        font-size: 20px;
    }
    @media(max-width: 500px){
        font-size: 18px;
    }
`;
const RegText = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    margin: 5px;
    font-family: Heebo;
    white-space: nowrap;

    @media(max-width: 500px){
        font-size: 18px;
    }
`;

const LeftSide = styled.div`
    display:flex;
    flex:1;
    
    @media(max-width:500px){
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;
const RightSide = styled.div`
    display:flex;

    @media(max-width:500px){
        justify-content: flex-end;
        margin-top: 10px;
        padding: 10px;
    }
`;

const DateTextCont = styled.div`
    margin-top: 5%;

    @media(max-width:500px){
        margin: 0;
    }
`;
const DateText = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #000000;
    margin-bottom: 3px;
    margin-right: 15px;
    font-family: Heebo, sans-serif;
    white-space: nowrap;

    @media(max-width: 1000px){
        font-size: 16px;
        margin-left: 10px;
    }
    @media(max-width: 500px){
        font-size: 14px;
        margin: 0;
    }
`;

// ============ Function ============== //
const PropertyCard = ({
// ============ Props
    src= "./images/property1.png",
    bold="5435 Kincaid St",
    boldDate="19 Jan 2017 19:01",
    regT1= "8 Rooms, 3 Bath",
    regT2= "Built in 2008",
    regT3= "Litigation History: No",
    regT4= "Since: 2011~",
    marginTop= "35%"

}) => {
    
// ============ Layout
    return (
        <BoxCont>
            <Box>
                <Cont>
                    <LeftSide>
                        <Img src={src} />
                        <TextCont>
                            <BoldText>{bold}</BoldText>
                            <RegText>{regT1}</RegText>
                            <RegText>{regT2}</RegText>
                            <RegText>{regT3}</RegText>
                            <RegText>{regT4}</RegText>
                        </TextCont>
                    </LeftSide>
                    <RightSide>
                        <DateTextCont>
                            <DateText marginTop={marginTop}>{boldDate}</DateText>
                        </DateTextCont>
                    </RightSide>
                </Cont>

            </Box>
        </BoxCont>
    );
}

export default PropertyCard;