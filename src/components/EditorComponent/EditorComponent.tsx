import React, { useState } from "react";
import Styles from "./style.module.scss";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";
import { PropsEditorComponent } from "../../types";

export const EditorComponent: React.FC<PropsEditorComponent> = ({ setContent }) => {
  const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty());

  const onEditorStateChange = (newState: EditorState) => {
    setEditorState(newState);
    setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <div className={Styles.editorContainer}>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        onEditorStateChange={onEditorStateChange}
        editorClassName={Styles.editor}
        placeholder="Текст"
      />
    </div>
  );
};
