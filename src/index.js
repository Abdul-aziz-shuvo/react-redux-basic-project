import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from "redux"
import postReducer from './reducer'
import {Provider} from  'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(postReducer,composeWithDevTools(applyMiddleware(thunk)))
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
       <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



