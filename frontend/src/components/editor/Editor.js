import React, { Component } from "react";
import Graphee from './Graph.js'
import "./editor.css"

export default class Editor extends Component{

    // Constructor of the Editor Component
    constructor(props){
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div>
                <Graphee></Graphee>
            </div>
        );
    }
}