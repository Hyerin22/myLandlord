import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';


import ProfileSub from '../../ProfileSub';

// ============ CSS ============== //
const TableCont = styled.div`
  width:90%;
  align-items:center;
  justify-content:center;
  margin-bottom: ${props => props.marginB};
`

// ============ COLUMN PROPS
const columns = [
  {
    field: 'avastar',
    headerName: 'Avastar',
    width: 150,
    type: 'image',
  },
  { field: 'name', 
    headerName: 'Name', 
    width: 180 
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 400,
  },
  {
    field: 'rating',
    headerName: 'Rating',
    type: 'number',
    width: 140,
  },
];

// ============ FAKE DATA ============== //
const rows =[

  { id:1, 
    avastar: <ProfileSub />,
    name:'Jasper White',
    address:'4388 Buchanan St 1901 Burnaby BC V5C 6R8',
    rating:'5',
  },
  {
    id:2, 
    avastar: 'img',
    name:'Calvin Harris',
    address:'406 47th Ave E Vancouver BC V5W 2B4',
    rating:'2',
  },
  {
    id:3, 
    avastar: 'img',
    name:'Calvin Harris',
    address:'406 47th Ave E Vancouver BC V5W 2B4',
    rating:'2',
  },
  { id:4, 
    avastar: 'img',
    name:'Jasper White',
    address:'4388 Buchanan St 1901 Burnaby BC V5C 6R8',
    rating:'5',
  },
  {
    id:5, 
    avastar: 'img',
    name:'Calvin Harris',
    address:'406 47th Ave E Vancouver BC V5W 2B4',
    rating:'2',
  },
  {
    id:6, 
    avastar: 'img',
    name:'Calvin Harris',
    address:'406 47th Ave E Vancouver BC V5W 2B4',
    rating:'3',
  },
];

// const useStyles = makeStyles({
//   root: {
//     '& .super-app-theme--header': 
//     {
//       backgroundColor: 'rgba(255, 7, 0, 0.55)',
//       fontFamily: "'Heebo', sans-serif",
//       border: "none"
//     },
//   },
// });


// ============ Function ============== //
const MuiTable = ({

// ============ Props
  marginB = "40px"
})=>{

//   const { data } = useDemoData({
//     dataSet: 'Employee',
//     rowLength: 10,

// ============ Layout
  return (
    <TableCont marginB={marginB}>
      <div style={{ 
        height: 500, 
        width: '90%',
        marginRight: 0,
        
        boxSizing: "border-box",

      }}
      >
        <DataGrid 
          rows={rows} 
          columns={columns}                
          
          style={{ 
            border: 'hidden',            
            fontFamily: "'Heebo', sans-serif",
            

            div: {
              border: "1px solid #5333ED",
            },
            
            
          }}

        />
      </div>
    </TableCont>
  );
}
export default MuiTable;
