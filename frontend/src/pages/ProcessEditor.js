import React from "react";
import Editor from "../components/editor/Editor"
import EditorNav from "../components/editor/EditorNav";
import EditorPanel from  "../components/editor/EditorPanel";

const ProcessEditor = () => (
    <div style={{width:"100vw", height:"100vh"}}>
        <EditorNav/>
        <Editor/>
        <EditorPanel/>
    </div>
);

export default ProcessEditor;