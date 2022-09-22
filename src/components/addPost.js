import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { Button, Table } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import React from 'react';
// server handlers
import {addPostOnServer} from './serverHandlers';

function AddPost(props) {
  const title = 'Enter title';
  const text = 'Enter text';
  return (
    <div className='container'>
      <CreateTitle title={title}></CreateTitle>
      <CreateField></CreateField>
      <CreateTitle title={text}></CreateTitle>
      <CreateField></CreateField>
      {/* <ButtonsGroup onChange={props.onChange}></ButtonsGroup> */}
      <ButtonsGroupClass onChange={props.onChange}></ButtonsGroupClass>
    </div>
  );
}

class AddPostClass extends React.Component {
  constructor(props) {
    super(props);

    this.title = 'Enter title';
    this.text = 'Enter text';
    this.items = props.items;

    this.itemTitle = '';
    this.itemText = '';

    this.lastPostID = props.items[props.items.length - 1].ID

    this.addItem = this.addItem.bind(this);
    this.changeItemTitle = this.changeItemTitle.bind(this);
    this.changeItemText = this.changeItemText.bind(this);
  }

  addItem() {
    let newObj = {
      ID: this.lastPostID + 1,
      Title: this.itemTitle,
      Text: this.itemText,
      IsDone: false,
    }

    addPostOnServer(newObj);
    this.props.addItem(newObj);
  }

  changeItemTitle(event) {
    this.itemTitle = event.target.value;
  }

  changeItemText(event) {
    // console.log(this.lastPostID);
    this.itemText = event.target.value;
  }

  render() {
    return (
    <div className='container'>
      <CreateTitle title={this.title}></CreateTitle>
      <CreateField className='CreateField__title' onChange={this.changeItemTitle}></CreateField>
      <CreateTitle title={this.text}></CreateTitle>
      <CreateField className='CreateField__text' onChange={this.changeItemText}></CreateField>
      {/* <ButtonsGroup onChange={props.onChange}></ButtonsGroup> */}
      <ButtonsGroupClass onChange={this.props.onChange} addItem={this.addItem} lastID={this.lastPostID}></ButtonsGroupClass>
    </div>);
  }
}

export {AddPost, AddPostClass};

function CreateTitle(props) {
  return (
    <TableContainer sx={{outline:'none'}}>
      <Table aria-label="custom pagination table">
        <TableBody>
          <TableRow>
            <TableCell align='left' sx={{
                fontSize: 24,
                fontWeight: 700,
                border: 'none',
              }}>
                {props.title}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function CreateField(props) {
  return (
    <TextField sx={{
      width: '100%',
    }} onChange={props.onChange}></TextField>
  );
}

class ButtonsGroupClass extends React.Component {
  constructor(props) {
    super(props);

    this.onClickCancel = this.onClickCancel.bind(this);
    this.onClickCreate = this.onClickCreate.bind(this);
  }

  onClickCancel(event) {
    let stateObj = {
      inMainPage: true,
      inAddPost: false,
      inChangePost: false,
    };
    this.props.onChange(stateObj);
  }

  onClickCreate(event) {
    let stateObj = {
      inMainPage: true,
      inAddPost: false,
      inChangePost: false,
    };
    this.props.addItem();
    this.props.onChange(stateObj);
  }

  render() {
    return (
      <div className='ButtonsGroup__container'>
      <Button variant='contained' sx={{
          width: 150,
          right: 154,
          position: 'absolute',
          marginTop: 1,
        }} onClick={this.onClickCreate}>Create post</Button>
      <Button variant='outlined' sx={{
          width: 150,
          right: 0,
          position: 'absolute',
          marginTop: 1,
        }} onClick={this.onClickCancel}>Cancel</Button>
    </div>
    );
  }
}