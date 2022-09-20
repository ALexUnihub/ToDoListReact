import React from 'react';
// import ReactDOM from 'react-dom/client';
import './itemList.css';

function ItemsList() {
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
      Text: 'Text_3',
      IsDone: true,
    },
  ]

  return (
    <div className='itemList'>
      <CreateElements elemets={newElems}/>
    </div>
  )
}

function CreateElements(props) {
  const reactElems = props.elemets.map((item, idx) => {
    let tmp = (<div className='itemList__item' key = {item.ID}>
      <div className='item__number'><p>{idx + 1}</p></div>
      <div className='item__title'><p>{item.Title}</p></div>
      <div className='item__text'><p>{item.Text}</p></div>
    </div>);
    return tmp;
  });
  console.log(reactElems);
  return reactElems;
}

export {ItemsList};