import * as React from 'react';
import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// ============ CSS ============== //
const Cont = styled.div`
  width: ${props=>props.cwidth};
	display:flex;
	flex-direction: column;
  justify-content: center;
	align-items: center;
	margin: 0;

  @media(max-width: 500px){
    display: none;
  }
`

// ============ Function ============== //
const PaginationRow = ({

// ============ Props
  cwidth ="100%",
  color="#5333ED",
  bgcolor="#5333ED",
  width = "60px",

}) => {

// ============ onChange prop
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

// ============ Layout
  return (
    <Cont cwidth={cwidth}>
       <Stack 
        className="page_cont"
        spacing={2}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',          
        }}
       
       >
        <Pagination 
          count={10} defaultPage={6} siblingCount={0} boundaryCount={2} 
          showFirstButton 
          showLastButton 
          page={page}
          
// ============ onChange prop
          onChange={handleChange} 
          
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            button: {
              color: {color},
              ":active": {
                bgcolor: {bgcolor},
              }
              
            },

            li: {
              fontFamily: '"Heebo", sans-serif',
              width: {width},
              ":nth-child(2)":{
                marginRight: 0,
              },

              ":nth-child(10)":{
                marginLeft: 0,
              }
            },

            path:{
              color: '#5333ED',
            }
          }}
        />
      </Stack>
    </Cont>     
  );
}

export default PaginationRow;