import React from 'react';
import './button.css';

function AddButton(props) {
  let btnText = props.name;
  return (
    <button className='addBtn'>{btnText}</button>
  );
}

function DeleteButton() {

}

export {AddButton, DeleteButton};