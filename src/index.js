import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ToDoApp from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ToDoApp />, document.getElementById('root'));
registerServiceWorker();
