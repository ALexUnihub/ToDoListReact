// import logo from './logo.svg';
import './App.css';
import {Title} from './elements/title';
import {ItemsList} from './elements/itemList';
// import {AddButton, DeleteButton} from './elements/button';
import Button from '@mui/material/Button';
import {DataGrid, GridValueGetterParams} from '@mui/x-data-grid';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  let columns = [
    {
      id: 0,
      ID: 0,
      firstName: 'Title_1',
      lastName: 'Text_1',
      IsDone: true,
    },
    {
      id: 1,
      ID: 1,
      firstName: 'Title_2',
      lastName: 'Text_2',
      IsDone: false,
    },
    {
      id: 2,
      ID: 2,
      firstName: 'Title_3',
      lastName: 'Text_3',
      IsDone: true,
    },
  ]
  let rows = [
    { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  ]

  return (
    <div className='container'>
      {/* <Title />
      <ItemsList /> */}
      <DataGrid
        rows={columns}
        columns={rows}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      <div className='container__btns'>
        {/* <AddButton name="Add new one"/> */}
        <Button variant='contained'>Add new one</Button>
      </div>
    </div>
  )
}

export {App};
