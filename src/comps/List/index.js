import styled from 'styled-components';
import React from 'react';
import Avatar from '../Avatar';
import ListHr from '../ListHr';
import ListText from '../ListText'

//https://cheatcode.co/tutorials/how-to-build-a-select-all-list-component-in-react-with-next-js

// const testUsers = [...Array(100)].map((item, index) => {
//   return {
//     _id: `user_${index}`,
//     name: "",
//     property: "",
//   };
// });

// ============ CSS ============== //
const TableCont = styled.div`
  width:100%;
`
const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  margin-left:5%;
  align-items:center;
  justify-content:center;

`
const TdCont = styled.div`
display:flex;
flex-direction: row;
justify-content:space-between;
align-items:center;
`

const Tr = styled.tr`
display:flex;
width: 100%;
justify-content:space-evenly;
:hover {background-color: #ddd;};
font-size:35px;
font-style:regular;
margin-top:5%;
`
// ============ Function ============== //
const List = () => {
  //const [users] = useState(testUsers);
  //const [selectedUsers, setSelectedUsers] = useState([]);

  // ============ Layout
  return (
    <TableCont>
      <Table>
        <Tr>
          <td scope="row"><Avatar/></td>
          <td scope="row">Jasper White </td>
          <td scope="row">
            <ListText marginTop="6px" fontSize="16px" text="4388 Buchanan St 1901 Burnaby BC V5C 6R8"/>
          </td>
        </Tr>
        <ListHr/>

      <Tr>  
        <td scope="row"><Avatar src="./icons/officon.png"/></td>
        <td scope="row">Calvin Harris</td>
        <ListText marginTop="6px" fontSize="16px" text="406 47th Ave E Vancouver BC V5W 2B4"/>

      </Tr>
      <ListHr/>

      <Tr>
        <td scope="row"><Avatar/></td>
        <td scope="row">Keven Troung</td>
        <ListText marginTop="6px" fontSize="16px" text="1470 Pennyfarthing Dr 203 Vancouver BC V6J 4Y2"/>

      </Tr>
      <ListHr/>
      </Table>
    </TableCont>
  );
};

export default List;
