import React from "react";
import { AdminContainer } from "../AdminContainer";
import { MyTextField } from "../../../../components/MyTextField";
import { FormikFormComponent } from "../../../../components/FormikFormComponent";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import { addNewPhoto } from "../../../../redux/Reducers/photoSlice";
import { validationSchemaNewPhoto } from "../../../../validationForms";
import { PropsAddNewPhoto } from "../../../../types";

export const AddNewPhoto = () => {
  const dispatch = useAppDispatch();
const { loading } = useAppSelector((state) => state.photos);
  const initialValues: PropsAddNewPhoto = {
    image: "",
    type: "",
  };

  const arrOptions = [
    { value: "", title: "Выбрать тип", hidden: true },
    { value: "newborn", title: "newborn" },
    { value: "baby", title: "baby" },
    { value: "family", title: "family" },
    { value: "christening", title: "christening" },
    { value: "woman", title: "woman" },
    { value: "discharge", title: "discharge" },
    { value: "pregnancy", title: "pregnancy" },
  ];

  const handlerSubmit = (values: PropsAddNewPhoto): void => {
    dispatch(addNewPhoto(values));
  };

  return (
    <AdminContainer title="Добавить новую фотографию" linkBack={{ title: "На главную", link: "/admin" }}>
      <FormikFormComponent
        initialValues={initialValues}
        onSubmit={handlerSubmit}
        validationSchema={validationSchemaNewPhoto}
        buttonProps={{ title: "Загрузить фотографию", style: "brown", edit: true, editStyle: "adminFormButton" }}
        styleForm="admin"
        loading={loading}
      >
        <MyTextField nameLabel="Ссылка с изображением" type="text" name="image" component="input" id="image" />
        <MyTextField
          nameLabel="Тип фотографии"
          type="text"
          name="type"
          component="select"
          id="type"
          select
          options={arrOptions}
        />
      </FormikFormComponent>
    </AdminContainer>
  );
};
