import React, { Component } from "react";
import Editor from "../components/editor/Editor"
import EditorNav from "../components/editor/EditorNav";
import EditorPanel from "../components/editor/EditorPanel";
import "../components/editor/editor.css"

export default class ProcessEditor extends Component {

    constructor(props) {
        super(props);
        this.state = { winWidth: 0, winHeight: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ winWidth: window.innerWidth, winHeight: window.innerHeight });
    }

    render() {
        return (
            <div style={{width: this.state.winWidth ,height: this.state.winHeight}}>
                <EditorNav />
                <Editor />
                <EditorPanel />
            </div>
        );
    }
}
