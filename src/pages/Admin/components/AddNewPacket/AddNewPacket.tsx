import React from "react";
import { MyTextField } from "../../../../components/MyTextField";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { IPacket } from "../../../../types";
import { AdminContainer } from "../AdminContainer";
import { FormikFormComponent } from "../../../../components/FormikFormComponent";
import { validationSchemaPacket } from "../../../../validationForms";
import { createPacket } from "../../../../redux/Reducers/packetSlice";

export const AddNewPacket: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.packets);
  const initialValues: IPacket = {
    namePacket: "",
    photosessionType: "",
    duration: "",
    price: "",
    description: "",
    shortDescription: "",
    image: "",
    imageDescription: "",
    imageDescriptionMobile: "",
    getFromPhotosession: "",
    countLocations: "",
    pinned: false,
    _id: "",
    createdAt: "",
  };

  const handleSubmit = (values: IPacket): void => {
    console.log("create packet", values);
    dispatch(createPacket(values));
  };

  return (
    <AdminContainer title="Создать новый пакет" linkBack={{ title: "На главную", link: "/admin" }}>
      <FormikFormComponent
        initialValues={initialValues}
        validationSchema={validationSchemaPacket}
        onSubmit={handleSubmit}
        buttonProps={{
          title: "Создать пакет",
          style: "brown",
          edit: true,
          editStyle: "adminFormButton",
          onDirty: true,
        }}
        styleForm="admin"
        loading={loading.createPacket}
      >
        <MyTextField nameLabel="Заголовок" type="text" name="namePacket" id="namePacket" component="input" />
        <MyTextField nameLabel="Пакет" type="text" name="photosessionType" id="photosessionType" component="input" />
        <MyTextField nameLabel="Продолжительность съемки" type="text" name="duration" id="duration" component="input" />
        <MyTextField nameLabel="Цена" type="text" name="price" id="price" component="input" />
        <MyTextField
          nameLabel="Описание"
          type="text"
          name="description"
          id="description"
          rows={5}
          component="textarea"
        />
        <MyTextField
          nameLabel="Краткое описание"
          type="text"
          name="shortDescription"
          id="shortDescription"
          rows={5}
          component="textarea"
        />
        <MyTextField
          nameLabel="Что клиент получает с фотосессии"
          type="text"
          name="getFromPhotosession"
          id="getFromPhotosession"
          rows={3}
          component="textarea"
        />
        <MyTextField
          nameLabel="Количество локаций"
          type="text"
          name="countLocations"
          id="countLocations"
          component="input"
        />
        <MyTextField nameLabel="Изображение" type="text" name="image" id="image" component="input" />
        <MyTextField
          nameLabel="Изображение в описании"
          type="text"
          name="imageDescription"
          id="imageDescription"
          component="input"
        />
        <MyTextField nameLabel="Закрепить" type="checkbox" name="pinned" id="pinned" component="input" checkbox />
      </FormikFormComponent>
    </AdminContainer>
  );
};
