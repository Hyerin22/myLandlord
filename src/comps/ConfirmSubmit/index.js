import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ Imported comps ============== //
import SubHead from '../SubHead';
import Button from '../Button'

// ============ CSS ============== //
const Cont = styled.div`
  width: 50%;
  display:flex;
  flex-direction: column;
  align-items:center;
  item-alignment: center;
  border-radius: 50px;
  box-shadow: ${props=>props.cbshadow}; 
  padding: 76px 94px;
`;

const BttnCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

// ============ Function ============== //
const ConfirmSubmit = ({
  
// ============ Props
    errortext = "Are you sure to submit this review?",
    cbshadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px",

}) => {

// ============ Layout
  return (
    <Cont 
      cbshadow={cbshadow}
    >
      <SubHead 
        text = {errortext}
        marginB="50"
      />
      
      <BttnCont>
        <Button 
          type ="cancel"
          text = "Cancle"
          margintop = "0px"
          width = "50%"
          marginright="30" 

// ============ onClick prop
          // clickHandler = () => {},
          // href="/posts"         
        />
        <Button 
          text = "Submit"
          margintop = "0px"
          border = "none"
          bgcolor = "#5333ED"
          color="#fff"
          hover = "box-shadow: none"
          width = "50%"  
// ============ onClick prop
          // clickHandler = () => {},
          // href="/posts" 
        />
      </BttnCont>
    </Cont>
  );
}

export default ConfirmSubmit;