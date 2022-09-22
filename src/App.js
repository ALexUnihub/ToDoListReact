// import logo from './logo.svg';
import './App.css';
import {ToDoList} from './components/list';
import {AddPost, AddPostClass} from './components/addPost';
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

      inMainPage: true,
      inAddPost: false,
      inChangePost: false,
    };

    this.stateChange = this.stateChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    
    this.title = 'To Do List';
    this.items = newElems;
  }

  stateChange(newState) {
    this.setState(newState);
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

  render() {
    let currState;

    if (this.state.inMainPage) currState = <ToDoList title={this.title} onChange={this.stateChange} deleteItem={this.deleteItem} items={this.items}/>;
    // if (this.state.inAddPost) currState = <AddPost onChange={this.handleChange} items={newElems}/>;
    if (this.state.inAddPost) currState = <AddPostClass onChange={this.stateChange} addItem={this.addItem} items={this.items}/>;

    return currState;
  }
}

export {AppClass};

