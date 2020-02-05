import React, { Component } from "react";
import { MDBContainer } from 'mdbreact';


class EditorPanel extends Component {
    constructor(props) {
        super(props);
        this.user_id = "User_To_Get";
        this.state = {
            collapse: false
        };
        this.toggleCollapse.bind(this);
    }

    toggleCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
    }


    render() {
        return(
            <div style={{backgroundColor: "#e0e0e0"}}>
                Coucou
                dza
                defaultdzad
                defaultdzad
                daz
                defaultdzad
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
            </div>
        );
    }
    }
export default EditorPanel;
