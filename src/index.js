import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Todo from './Todo';
//import ImageSlice from './ImageSlide';
//import store from './redux/store';
//import { Provider } from 'react';
import Accordion from './components/Accordion'

ReactDOM.render(
  <React.StrictMode>
      {/* <App /> */}
      {/* <Todo/> */}
      {/* <ImageSlice/> */}
      <Accordion/>
   
  </React.StrictMode>,
  document.getElementById('root')
);
