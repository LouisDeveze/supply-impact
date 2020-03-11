import React, { Component } from "react";
import "./editor.css"

export default class Editor extends Component{

    // Constructor of the Editor Component
    constructor(props){
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div className="editor" style={{width:"75%", height:"100%", display:"inline-block"}}>
                Courouc
            </div>
        );
    }
}