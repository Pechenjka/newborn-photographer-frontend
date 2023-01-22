import React, { useEffect, useState } from "react";
import Styles from "./style.module.scss";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";
import { PropsEditorComponent } from "../../types";
import { useAppSelector } from "../../redux/hooks";

export const EditorComponent: React.FC<PropsEditorComponent> = ({ setContent }) => {
  const { editNote, textBlock } = useAppSelector((state) => state.editor);
  const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty());

  const onEditorStateChange = (newState: EditorState) => {
    setEditorState(newState);
    setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  const handleChangeEditorState = (textBlock: string): void => {
    const blocksFromHtml = htmlToDraft(textBlock);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorState = EditorState.createWithContent(contentState);
    setEditorState(editorState);
  };

  useEffect(() => {
    if(editNote) {
      handleChangeEditorState(textBlock.text)
    }
  }, [editNote]);

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
