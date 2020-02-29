import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Hire from './pages/hire';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
//<App />, document.getElementById('root')
ReactDOM.render((

    <Router>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/hire' component={Hire} />
        </div>
    </Router>

), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
