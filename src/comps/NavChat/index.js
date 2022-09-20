import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ CSS ============== //
const Nav = styled.div`    
  height: 114px;
  margin-right: ${props=>props.mright}px;
  box-sizing: border-box;
  display: flex;
  align-items:center;
  justify-content:center;
  cursor: pointer; 
`;

const Content = styled.p`
  font-family: 'Heebo', sans-serif;
  font-size: 24px;
  font-weight: 400;
  position: relative;
  color: ${props=>props.pColor};

  @media (max-width: 1000px) {
    font-size: 17px;
  }

  :before{
    content : "";
    position: absolute;
    background-color: #5333ED;
    height: 2px;
    width : ${props=>props.beforeWidth};
    bottom: 0px; left: 50%;
    transition: 0.5s; 
    transform: translateX(-50%);
  }
  
  :hover {
    color:#5333ED; 
  }

  :hover:before {    
    width: 100%;
  }

  :active {
    color: #5333ED;
  }

  :active:before {    
    width: 100%;    
  }
`

// ============ Function ============== //
// ============ Layout
const NavChat =({

// ============ Props  
  marginright = "",
  pColor="",
  beforeWidth="0%",
  chatClick=()=>{}

})=>{
  
  const router = useRouter();
  // if(router.pathname === "/Chat") 
  // {
  //   return (
  //     <Nav 
  //       mright={marginright} 
  //       onClick={() => router.push("/Chat")}
  //       height={height}      
  //     >            
  //       <Content               
  //         pSize={pSize}
  //         pWeight={pWeight}
  //         pHeight={pHeight}
  //         pColor= "#5333ED"
  //         beforeWidth = "100%"
  //       >
  //         Chat
  //       </Content>
  //     </Nav>
  //   );
  // }
  
// ============ Layout
  return (
    <Nav 
      mright={marginright} 
      // onClick={() => router.push("/Chat")}
      onClick={chatClick}
    >
      <Content               
        pColor={pColor}
        beforeWidth={beforeWidth}
      >
        Chat
      </Content>
    </Nav>
  );
}

export default NavChat;