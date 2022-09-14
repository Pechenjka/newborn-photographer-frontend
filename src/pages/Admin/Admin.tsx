import Styles from "./style.module.scss";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import { AdminContainer } from "./components/AdminContainer";
import { LinkList } from "./components/LinkList";
import { ILinkListAdmin } from "../../types";

export const Admin: React.FC = () => {
  const { url } = useRouteMatch();

  const linksListAdmin: ILinkListAdmin[] = [
    { title: "Добавить новый пакет", path: `${url}/addNewPacket` },
    { title: "Добавить фотографию в фотогалерею", path: `${url}/addNewPhoto` },
    { title: "Список заказов", path: `${url}/orderList` },
  ];

  return (
    <div className={Styles.admin}>
      <AdminContainer title="Админка" linkBack={{ title: "Вернуться на сайт", link: "/" }}>
        <LinkList links={linksListAdmin} />
      </AdminContainer>
    </div>
  );
};
