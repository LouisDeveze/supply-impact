import React, { Component } from "react";
import ReactDOM from "react-dom"


class EditorPanel extends Component {

    constructor(props){
        super(props);

        this.state = {
            editorWidth: "0px",
            editorHeight: "0px",
            editorX: "0px",
            editorY: "0px"
        }
    }
    
    componentDidMount(){
        var rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
        this.setState({
            editorX: rect.left,
            editorY: rect.top,
            editorWidth: rect.width,
            editorHeight: rect.height
        })
    }


    render() {
        return(
            <div className="editor-panel" style={{width: "25%", height:"100%", display:"inline-block"}}>
                Coucou
            </div>
        );
    }
    }
export default EditorPanel;
