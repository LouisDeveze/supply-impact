import React, {Component} from 'react';
import ProcessEditor from './pages/ProcessEditor';
import Home from './pages/Home';
import Profil from './pages/Profil';
import MyProducts from './pages/MyProducts';
import RawMaterials from './pages/RawMaterials';
import Suppliers from './pages/Suppliers';
import Distributors from './pages/Distributors';
import Subcontractors from './pages/Subcontractors';
import { Route} from "react-router-dom";


export default class App extends Component {

  render() {
    return (
      <div>
        <Route path="/" exact component={ProcessEditor} />
        <Route path="/Home" exact component={Home} />        
        <Route path="/Profil" exact component={Profil} />
        <Route path="/MyProducts" exact component={MyProducts} />
        <Route path="/RawMaterials" exact component={RawMaterials} />        
        <Route path="/Suppliers" exact component={Suppliers} />
        <Route path="/Distributors" exact component={Distributors} />
        <Route path="/Subcontractors" exact component={Subcontractors} />
       </div>
    );
  }
}