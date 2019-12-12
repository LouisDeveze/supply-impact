import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Login from "./components/log_component/login";
import SignUp from "./components/log_component/signup";

//Import the MDBReact's requirement
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const routing = (
    <Router>
      <div id="routing-container">
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/signin" component={SignUp}></Route>
        </Switch>
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
