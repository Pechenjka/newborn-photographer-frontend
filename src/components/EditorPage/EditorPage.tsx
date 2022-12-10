import React, { useEffect, useState } from "react";
import Styles from "./style.module.scss";
import { EditorComponent } from "../EditorComponent";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  createTextOnPage,
  editTextOnPage,
  getTextOnPage,
  handlerEditNote,
  handlerEditTextBlock,
} from "../../redux/Reducers/editorSlice";
import { useHistory } from "react-router-dom";
import { Button } from "../Button";
import { PropsArrTabs } from "../../types";
import { useDisabledScroll } from "../../hooks/useDisabledScroll";

export const EditorPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [content, setContent] = useState<string>("");
  const { textBlock, editNote } = useAppSelector((state) => state.editor);
  const [typePhotoSession, setTypePhotoSession] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const { handlerDisabledScroll } = useDisabledScroll;

  useEffect(() => {
    if (editNote) handlerDisabledScroll(false);
    setIsValid(true);
  }, [editNote]);

  const handleSaveContent = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    if (editNote) {
      dispatch(editTextOnPage({ _id: textBlock._id, text: content }));
      dispatch(handlerEditNote(false));
      dispatch(
        handlerEditTextBlock({
          text: "",
          typePhotoSession: "",
          _id: "",
        })
      );
      dispatch(getTextOnPage());
    } else {
      dispatch(createTextOnPage({ text: content, typePhotoSession }));
    }
    history.push("/aboutPhotosession");
  };

  const onChangeNamePage = (event: React.ChangeEvent<any>) => {
    setTypePhotoSession(event.target.value);
    setIsValid(event.target.closest("form").checkValidity());
  };

  const handleClickBackBtn = (): void => {
    dispatch(handlerEditTextBlock({ text: "", typePhotoSession: "", _id: "" }));
    history.push("/aboutPhotosession");
  };

  const arrTabs: PropsArrTabs[] = [
    { value: "", title: "Выбрать тип фотосесии", hidden: true },
    { value: "newborn", title: "О фотосесии новорожденного" },
    { value: "family", title: "О семейной фотосесии" },
  ];

  return (
    <div className={Styles.editorPage}>
      <Button styleButton="transparent" type="button" onClick={handleClickBackBtn}>
        Вернуться
      </Button>
      <h2 className={Styles.editorPage__title}>Редактор</h2>
      <form action="" onSubmit={handleSaveContent}>
        <select className={Styles.editorPage__select} name="pages" id="pages" onChange={onChangeNamePage}>
          {editNote ? (
            <option value={textBlock.typePhotoSession}>{textBlock.typePhotoSession}</option>
          ) : (
            arrTabs.map((item) => {
              return (
                <option value={item.value} key={item.value}>
                  {item.title}
                </option>
              );
            })
          )}
        </select>
        <EditorComponent setContent={setContent} />
        <Button
          type="submit"
          disabled={!isValid || content.length < 10}
          styleButton="ping"
          editStyle="editorButton"
          edit
        >
          Сохранить
        </Button>
      </form>
      <div className={Styles.editorPage__previewContainer}>
        <h3 className={Styles.editorPage__titlePreview}>Превью</h3>
        <div className={Styles.editorPage__preview}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};
