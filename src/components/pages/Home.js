import React, { Component } from "react";
import NavHome from "../components/nav/NavHome";

export default class Home extends Component {
    constructor(props) {
      super(props);
      this.data = {};
    }

componentDidMount() {
    let user_id = localStorage.getItem("user_id");
    if (user_id === null || user_id === undefined)
        window.location.replace("/log/in");
    }

render() {
    return (
        <div className="col-cc" style={{ minHeight: "100vh", padding: "0 10%" }}>
        <div className="col-cc">
            <NavHome />
            <h1 className="global_title_1">Welcome on Supply'Impact !</h1>
            
        </div>
        </div>
    );
    }
}
