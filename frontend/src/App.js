import React, {Component} from 'react';
import ProcessEditor from './pages/ProcessEditor';
import { Route} from "react-router-dom";


export default class App extends Component {

  render() {
    return (
      <div>
        <Route path="/" exact component={ProcessEditor} />
      </div>
    );
  }
}