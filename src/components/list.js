import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Table } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
// server handlers
import {deletePostOnServer} from './serverHandlers';
//
import React from 'react';

function ToDoList(props) {
  // const reactComponents = createComponents(props.items);
  const reactComponents = <CreateComponents elems={props.items} deleteItem={props.deleteItem}/>;

  return (
    <div className='container'>
      <ListContainer reactComponents={reactComponents} title={props.title}></ListContainer>
      <AddBtnClass name={"Add new one"} onChange={props.onChange}/>
    </div>
  );
}

export {ToDoList};

function ListContainer(props) {
  return (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
      <TableBody>
        <TableRow>
          <TableCell align='center' sx={{
              fontSize: 24,
              fontWeight: 700,
            }}>
              {props.title}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
      <TableBody>
        {props.reactComponents}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

function CreateComponents(props) {

  const arr = props.elems.map((row, idx) => {
    return (
    <TableRow key={row.Text} data-postid={row.ID}>
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
        <DeleteBtnClass deleteItem={props.deleteItem}/>
      </TableCell>
    </TableRow>);
  });

  return arr;
}

class DeleteBtnClass extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }


  handleDelete(event) {
    const tableRow = event.target.closest('tr');
    let postID = tableRow.dataset.postid;

    deletePostOnServer(postID);
    this.props.deleteItem(postID);

    tableRow.remove();
  }

  render() {
    return (
        <DeleteOutlined sx={{ 
            fontSize: 24, 
            width: 44, 
            color: '#1976d2',
          }} 
          className='testName' onClick={this.handleDelete}>
        </DeleteOutlined>
    );
  }
}


class AddBtnClass extends React.Component {
  constructor(props) {
    super(props);

    this.name = props.name;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let stateObj = {
      inMainPage: false,
      inAddPost: true,
      inChangePost: false,
    };
    this.props.onChange(stateObj);
  }

  render() {
    return (
      <Button  variant='contained' sx={{
            width: 150,
            right: 0,
            position: 'absolute',
            marginTop: 1,
          }} 
          onClick={this.handleClick}>{this.name}</Button>
    );
  }
}
