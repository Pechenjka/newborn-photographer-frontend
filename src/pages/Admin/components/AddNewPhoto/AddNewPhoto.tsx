import React, { useEffect, useState } from "react";
import { AdminContainer } from "../AdminContainer";
import { MyTextField } from "../../../../components/MyTextField";
import { FormikFormComponent } from "../../../../components/FormikFormComponent";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { addNewPhoto, fetchPhotos } from "../../../../redux/Reducers/photoSlice";
import { validationSchemaNewPhoto } from "../../../../validationForms";
import { PropsAddNewPhoto } from "../../../../types";

export const AddNewPhoto = () => {
  const dispatch = useAppDispatch();
  const { loading, getPhotos } = useAppSelector((state) => state.photos);
  const [refresh, setRefresh] = useState<boolean>(true);

  const initialValues: PropsAddNewPhoto = {
    image: "",
    type: "",
    order: null,
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

  useEffect(() => {
    refresh && dispatch(fetchPhotos({ type: null, order: "sort" }));
    setRefresh(false);
  }, [refresh]);

  const handlerSubmit = (values: { type: string; image: string }): void => {
    const arrSameType = getPhotos.filter((item) => {
      return item.type === values.type && item;
    });
    setRefresh(true);
    dispatch(addNewPhoto({ type: values.type, image: values.image, order: arrSameType.length + 1 }));
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
