import React, { Component } from "react";


export default class Editor extends Component{

    // Constructor of the Editor Component
    constructor(props){
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div style={{backgroundColor: "#aa0000", height:"30px"}}>Coucou</div>
        );
    }
}