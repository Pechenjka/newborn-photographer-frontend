import React, { useState } from "react";
import Styles from "./style.module.scss";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";

export const EditorComponent: React.FC = () => {
  const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty());
  const [content, setContent] = useState<string>("");

  console.log(content);
  const onEditorStateChange = (newState: EditorState) => {
    setEditorState(newState);
    setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <div className={Styles.editorContainer}>
      <Editor
        editorState={editorState}
        // onEditorStateChange={onChange}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        onEditorStateChange={onEditorStateChange}
        editorClassName={Styles.editor}
        placeholder="Текст"
      />
      <div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};
