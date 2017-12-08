import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import ToDoApp from './app';
import todoApp from './app.reducer';

let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
