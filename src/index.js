import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import ToDoApp from './app';
import { todoApp } from './app.reducer';
import { setTodos } from './app.actions';

let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

store.subscribe(() => {
  if (window.chrome.storage) {
    const { todos } = store.getState();

    window.chrome.storage.sync.set({ todos });
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if (window.chrome.storage) {
    window.chrome.storage.sync.get('todos', ({ todos }) => todos && store.dispatch(setTodos(todos)));
  }
});
