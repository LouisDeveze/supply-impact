import React, {Component} from 'react';
import ProcessEditor from './pages/ProcessEditor';
import Home from './pages/Home';
import MyProducts from './pages/MyProducts';
import { Route} from "react-router-dom";


export default class App extends Component {

  render() {
    return (
      <div>
        <Route path="/" exact component={ProcessEditor} />
        <Route path="/home" exact component={Home} />
        <Route path="/MyProducts" exact component={MyProducts} />
       </div>
    );
  }
}