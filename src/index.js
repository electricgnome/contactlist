import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {getContacts, setContact} from './contacts.js'




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
