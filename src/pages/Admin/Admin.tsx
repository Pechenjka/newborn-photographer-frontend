import Styles from "./style.module.scss";
import React from "react";
import { useLocation } from "react-router-dom";
import { AdminContainer } from "./components/AdminContainer";
import { LinkList } from "./components/LinkList";
import { ILinkListAdmin } from "../../types";

export const Admin: React.FC = () => {
  const { pathname } = useLocation();

  const linksListAdmin: ILinkListAdmin[] = [
    { title: "Добавить новый пакет", path: `${pathname}/addNewPacket` },
    { title: "Добавить фотографию в фотогалерею", path: `${pathname}/addNewPhoto` },
    { title: "Список заказов", path: `${pathname}/orderList` },
  ];

  return (
    <div className={Styles.admin}>
      <AdminContainer title="Админка" linkBack={{ title: "Вернуться на сайт", link: "/" }}>
        <LinkList links={linksListAdmin} />
      </AdminContainer>
    </div>
  );
};
