// import logo from './logo.svg';
import './App.css';
import {ToDoList} from './components/list';
import {AddPostClass} from './components/addPost';
import {ChangePostClass} from './components/changePost';
import React from 'react';


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

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // inMainPage: false,
      // inAddPost: false,
      // inChangePost: true,
      inMainPage: true,
      inAddPost: false,
      inChangePost: false,
    };

    this.stateChange = this.stateChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeItem = this.changeItem.bind(this);
    
    this.title = 'To Do List';
    this.items = props.itemsFromServer;
    this.postToChangeIdx = null;
  }

  stateChange(newState, postToChangeID) {
    this.setState(newState);

    // console.log(postToChangeID);
    let toChangeIndex = null;
    postToChangeID = parseInt(postToChangeID);
    this.items.filter((item, idx) => {
      if (item.ID === postToChangeID) toChangeIndex = idx;
    })

    if (toChangeIndex !== null) {
      this.postToChangeIdx = toChangeIndex;
      // console.log(this.postToChangeIdx);
    }
  }

  addItem(item) {
    this.items.push(item);
    console.log(this.items);
  }

  deleteItem(postID) {
    postID = parseInt(postID);
    let postIndex = null;

    this.items.filter((item, idx) => {
      if (item.ID === postID) {
        postIndex = idx;
      };
    });

    if (postIndex !== null) {
      this.items.splice(postIndex, 1);
    }

    console.log(this.items);
  }

  changeItem(newObj) {
    let postIdx = null;

    this.items.filter((item, idx) => {
      if (item.ID === newObj.ID) {
        postIdx = idx;
      }
    });

    if (postIdx !== null) {
      this.items[postIdx] = newObj;
    }

    console.log(this.items);
  }

  render() {
    let currState;

    if (this.state.inMainPage) currState = <ToDoList title={this.title} onChange={this.stateChange} deleteItem={this.deleteItem} items={this.items}/>;
    // if (this.state.inAddPost) currState = <AddPost onChange={this.handleChange} items={newElems}/>;
    if (this.state.inAddPost) currState = <AddPostClass onChange={this.stateChange} addItem={this.addItem} items={this.items}/>;
    if (this.state.inChangePost) currState = <ChangePostClass 
        onChange={this.stateChange} 
        changeItem={this.changeItem} 
        items={this.items} 
        postToChangeIdx={this.postToChangeIdx}>
      </ChangePostClass>;

    return currState;
  }
}

export {AppClass};

