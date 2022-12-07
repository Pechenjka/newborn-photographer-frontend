import React, { useState } from "react";
import Styles from "./style.module.scss";
import { EditorComponent } from "../EditorComponent";
import { useAppDispatch } from "../../redux/hooks";
import { createTextOnPage } from "../../redux/Reducers/editorSlice";
import { useHistory } from "react-router-dom";
import { Button } from "../Button";
import { PropsArrTabs } from "../../types";

export const EditorPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [content, setContent] = useState<string>("");
  const [typePhotoSession, setTypePhotoSession] = useState<string>("");
  const [isValid, setIsValid] = useState<string>("");

  const handleSaveContent = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    dispatch(createTextOnPage({ text: content, typePhotoSession }));
    history.push("/aboutPhotosession");
  };

  const onChangeNamePage = (event: React.ChangeEvent<any>) => {
    setTypePhotoSession(event.target.value);
    setIsValid(event.target.closest("form").checkValidity());
  };

  const arrTabs: PropsArrTabs[] = [
    { value: "", title: "Выбрать тип фотосесии", hidden: true },
    { value: "newborn", title: "О фотосесии новорожденного" },
    { value: "family", title: "О семейной фотосесии" },
  ];

  return (
    <div className={Styles.editorPage}>
      <Button styleButton="transparent" type="button" onClick={() => history.push("/aboutPhotosession")}>
        Вернуться
      </Button>
      <h2 className={Styles.editorPage__title}>Редактор</h2>
      <form action="" onSubmit={handleSaveContent}>
        <select className={Styles.editorPage__select} name="pages" id="pages" onChange={onChangeNamePage}>
          {arrTabs.map((item) => {
            return (
              <option value={item.value} key={item.value}>
                {item.title}
              </option>
            );
          })}
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
