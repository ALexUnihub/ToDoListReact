// import logo from './logo.svg';
import './App.css';
import {Title} from './elements/title';
import {ItemsList} from './elements/itemList';
// import {AddButton, DeleteButton} from './elements/button';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Table } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';



function App() {
  let newElems = [
    {
      ID: 0,
      Title: 'Title_1',
      Text: 'Text_1',
      IsDone: true,
    },
    {
      ID: 1,
      Title: 'Title_2',
      Text: 'Text_2',
      IsDone: false,
    },
    {
      ID: 2,
      Title: 'Title_3',
      Text: 'Text_3Text_3Text_3Text_3Text_3Text_3 Text_3',
      IsDone: true,
    },
  ]

  const reactElems = createItems(newElems);
  const title = "To Do List";

  return (
    <div className='container'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableBody>
            <TableRow>
              <TableCell align='center'>
                {title}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableBody>
            {reactElems}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant='contained' sx={{
        width: 150,
        right: 0,
        position: 'absolute',
      }}>Add new one</Button>
    </div>
  );
}

export {App};

function createItems(elems) {
  const arr = elems.map((row, idx) => {
    return (<TableRow key={row.Text}>
      <TableCell style={{ width: 50 }} component="th" scope="row">
        {idx + 1}
      </TableCell>
      <TableCell style={{ minWidth: 160 }} align="left">
        {row.Title}
      </TableCell>
      <TableCell align="left">
        {row.Text}
      </TableCell>
      <TableCell style={{ width: 52 }}>
        <Button style={{ width: 44 }}>Edit</Button>
      </TableCell>
      <TableCell style={{ width: 52 }}>
        <DeleteOutlined sx={{ fontSize: 24, width: 44, color: '#1976d2' }} className='testName'></DeleteOutlined>
      </TableCell>
    </TableRow>);
  });

  console.log(arr);
  return arr;
}