import React, { Fragment, useEffect, useState } from "react";
import Styles from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import classNames from "classnames/bind";
import { PropsDataTabs, PropsText } from "../../../../types";
import { Button } from "../../../../components/Button";
import { deleteTextBlock, handlerEditNote, handlerEditTextBlock } from "../../../../redux/Reducers/editorSlice";
import { useDisabledScroll } from "../../../../hooks/useDisabledScroll";
import { useNavigate } from "react-router-dom";

export const TabsAboutPhotoSession: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { aboutPhotoSession, error, loading, textBlock, editNote } = useAppSelector((state) => state.editor);
  const { user } = useAppSelector((state) => state.user);
  const [openNote, setOpenNote] = useState<boolean>(false);
  const { handlerDisabledScroll } = useDisabledScroll;

  const cx = classNames.bind(Styles);
  const StyleCoverContainerNote = cx("tabs__coverContainerNote", {
    tabs__coverContainerNote_open: openNote,
  });

  const dataTabs: PropsDataTabs[] = [
    {
      labelName: "Фотосессия новорожденного",
      id: "tab-btn-1",
      idContent: "content-1",
      getText: aboutPhotoSession.newborn,
      defaultChecked: true,
    },
    {
      labelName: "Семейная фотосессия",
      id: "tab-btn-2",
      idContent: "content-2",
      getText: aboutPhotoSession.family,
      defaultChecked: false,
    },
  ];

  useEffect(() => {
    handlerDisabledScroll(openNote);
  }, [openNote]);

  const handlerOpenNoteTextBlock = (typeAboutPhotoSession: PropsText[], id: string) => {
    typeAboutPhotoSession.some((textBlock: PropsText) => {
      if (textBlock._id === id) dispatch(handlerEditTextBlock(textBlock));
    });
    setOpenNote(true);
  };

  const handlerCloseNoteTextBlock = (): void => {
    dispatch(handlerEditTextBlock({ text: "", _id: "", typePhotoSession: "" }));
    setOpenNote(false);
  };

  const handlerDeleteTExtBlock = (itemId: string): void => {
    dispatch(deleteTextBlock(itemId));
    setOpenNote(false);
  };

  const handleEditTextBlock = (): void => {
    setOpenNote(false);
    dispatch(handlerEditNote(true));
    navigate("/editor");
  };

  return (
    <ul className={Styles.tabs}>
      {dataTabs.map((item: PropsDataTabs) => {
        return (
          <Fragment key={item.id}>
            <input
              className={Styles.tabs__radio}
              type="radio"
              name="tab"
              id={item.id}
              defaultChecked={item.defaultChecked}
            />
            <label className={Styles.tabs__labelRadio} htmlFor={item.id}>
              {item.labelName}
            </label>
            <div className={Styles.tabs__content} id={item.idContent}>
              {error.getTextsAboutPhotoSession ? (
                <p>{error.getTextsAboutPhotoSession}</p>
              ) : (
                item.getText?.map((el: PropsText, index: number) => {
                  const showTabs = textBlock?._id === el._id;
                  return (
                    <div className={Styles.tabs__textContainer} key={index}>
                      <div className={Styles.tabs__blockText} dangerouslySetInnerHTML={{ __html: el.text }} />
                      {user.role.includes("ADMIN") && (
                        <div className={Styles.tabs__noteContainer}>
                          <button
                            className={Styles.tabs__noteButton}
                            onClick={() => handlerOpenNoteTextBlock(item.getText, el._id)}
                          />
                          <div className={StyleCoverContainerNote} onClick={handlerCloseNoteTextBlock} />
                          <div className={`${Styles.tabs__note} ${showTabs && Styles.tabs__note_open}`}>
                            <Button styleButton="simply" type="button" onClick={handleEditTextBlock}>
                              Редактировать
                            </Button>
                            <Button styleButton="simply" type="button" onClick={() => handlerDeleteTExtBlock(el._id)}>
                              Удалить блок
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </Fragment>
        );
      })}
    </ul>
  );
};
