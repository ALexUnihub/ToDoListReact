import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { Button, Table } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import React from 'react';
// server handlers
import {changePostOnServer} from './serverHandlers';


class ChangePostClass extends React.Component {
  constructor(props) {
    super(props);

    this.title = 'Edit title';
    this.text = 'Edit text';

    this.currItemTitle = props.items[props.postToChangeIdx].Title;
    this.currItemText = props.items[props.postToChangeIdx].Text;

    this.changeItem = this.changeItem.bind(this);
    this.changeItemTitle = this.changeItemTitle.bind(this);
    this.changeItemText = this.changeItemText.bind(this);
  }

  changeItem() {
    const postIndex = this.props.postToChangeIdx;

    let newObj = {
      ID: this.props.items[postIndex].ID,
      Title: this.currItemTitle,
      Text: this.currItemText,
      IsDone: false,
    }

    changePostOnServer(newObj);
    this.props.changeItem(newObj);
  }

  changeItemTitle(event) {    
    this.currItemTitle = event.target.value;
  }

  changeItemText(event) {
    this.currItemText = event.target.value;
  }

  render() {
    return (
      <div className='container'>
        <CreateTitle title={this.title}></CreateTitle>
        <CreateField className='CreateField__title' onChange={this.changeItemTitle} value={this.currItemTitle}></CreateField>
        <CreateTitle title={this.text}></CreateTitle>
        <CreateField className='CreateField__text' onChange={this.changeItemText} value={this.currItemText}></CreateField>
        {/* <ButtonsGroup onChange={props.onChange}></ButtonsGroup> */}
        <ButtonsGroupClass onChange={this.props.onChange} changeItem={this.changeItem} lastID={this.lastPostID}></ButtonsGroupClass>
      </div>);
  }
}

export {ChangePostClass};

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
    }} onChange={props.onChange} defaultValue={props.value}></TextField>
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

    this.props.changeItem();
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
        }} onClick={this.onClickCreate}>Change post</Button>
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