import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, AppClass} from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <AppClass />
//   </React.StrictMode>
// );

Initialize();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

async function Initialize() {
  let response = await fetch('http://localhost:8080/api/posts');
  let responseJSON = await response.json();

  console.log(responseJSON)

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <AppClass itemsFromServer={responseJSON}/>
    </React.StrictMode>
  );
}
