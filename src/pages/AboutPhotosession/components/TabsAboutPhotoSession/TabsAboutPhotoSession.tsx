import React, { Fragment, useState } from "react";
import Styles from "./style.module.scss";
import { useAppSelector } from "../../../../redux/hooks";
import classNames from "classnames/bind";
import { PropsDataTabs, PropsText } from "../../../../types";


export const TabsAboutPhotoSession: React.FC = () => {
  const { aboutPhotoSession, error, loading } = useAppSelector((state) => state.editor);
  const { user } = useAppSelector((state) => state.user);
  const [openNote, setOpenNote] = useState<boolean>(false);

  const cx = classNames.bind(Styles);
  const StyleCOverContainerNote = cx("tabs__coverContainerNote", {
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
                  return (
                    <div className={Styles.tabs__textContainer} key={index}>
                      <div className={Styles.tabs__blockText} dangerouslySetInnerHTML={{ __html: el.text }} />
                      {user.role.includes("ADMIN") && (
                        <div className={Styles.tabs__noteContainer}>
                          <button
                            className={Styles.tabs__noteButton}
                            onClick={() => {
                              setOpenNote(true);
                            }}
                          />
                          <div className={StyleCOverContainerNote} onClick={() => setOpenNote(false)}>
                            <div className={Styles.tabs__note}>
                              <button>редактировать</button>
                              <button>удалить</button>
                            </div>
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
