import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import { firebaseApp } from './firebase';

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        <Route exact path="/" component={Dashboard} />
    }
    else {
        <Route exact path="/" component={Home} />
    }
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
