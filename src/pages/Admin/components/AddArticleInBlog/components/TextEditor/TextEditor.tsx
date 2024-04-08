import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FormikFormComponent } from "../../../../../../components/FormikFormComponent";
import { validationSchemaArticlePhoto } from "../../../../../../validationForms";
import { MyTextField } from "../../../../../../components/MyTextField";
import { useAppDispatch } from "../../../../../../redux/hooks";
import { createArticle } from "../../../../../../redux/Reducers/blogSlice";

export const TextEditor: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const [images, setImages] = useState<Array<string>>([]);
  const [imagePrev, setImagePrev] = useState<string>("");

  const initialValuesImage: { image: string } = {
    image: "",
  };

  const initialValuesImagePrev: { imagePrev: string } = {
    imagePrev: "",
  };

  const initialValuesCreateArticle = {
    description: value,
    images,
    imagePrev,
    typePhotoSession: "",
    url: "",
    title: "",
  };

  const AddPhotos = (values: { image: string }) => {
    setImages([...images, values.image]);
  };

  const AddImagePrev = (values: { imagePrev: string }) => {
    setImagePrev(values.imagePrev);
  };

  const handlerSubmitNewArticle = (values: any) => {
    dispatch(
      createArticle({
        description: values.description,
        title: values.title,
        url: values.url,
        typePhotoSession: values.typePhotoSession,
        imagePrev: values.imagePrev,
        images,
      })
    );
  };

  return (
    <div>
      <FormikFormComponent
        initialValues={initialValuesCreateArticle}
        onSubmit={handlerSubmitNewArticle}
        buttonProps={{ title: "Submit", style: "brown", edit: true, editStyle: "adminFormButton" }}
        styleForm="admin"
      >
        <MyTextField nameLabel="Title" type="text" name="title" component="input" id="title" />
        <MyTextField nameLabel="URL" type="text" name="url" component="input" id="url" />
        <MyTextField
          nameLabel="TypePhotoSession"
          type="text"
          name="typePhotoSession"
          component="input"
          id="typePhotoSession"
        />
        <ReactQuill
          theme="snow"
          placeholder="Description"
          value={value}
          onChange={setValue}
          modules={{
            toolbar: [
              [{ font: [] }, { size: [] }],
              ["bold", "italic", "underline", "strike"],
              [{ color: [] }, { background: [] }],
              [{ script: "super" }, { script: "sub" }],
              [{ header: 1 }, { header: 2 }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              ["blockquote", "code-block"],
              [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
              ["direction", { align: [] }],
              ["link", "image", "video", "formula"],
              ["clean"],
            ],
          }}
        />
      </FormikFormComponent>
      <FormikFormComponent
        initialValues={initialValuesImagePrev}
        onSubmit={AddImagePrev}
        buttonProps={{ title: "Add image preview", style: "transparent", edit: true, editStyle: "adminFormButton" }}
      >
        <MyTextField nameLabel="Image preview" type="text" name="imagePrev" id="imagePrev" component="input" />
      </FormikFormComponent>
      <div>
        <p>Photo preview</p>
        <img style={{ width: "50%" }} src={imagePrev} />
      </div>
      <FormikFormComponent
        initialValues={initialValuesImage}
        validationSchema={validationSchemaArticlePhoto}
        onSubmit={AddPhotos}
        buttonProps={{ title: "Add photo", style: "transparent", edit: true, editStyle: "adminFormButton" }}
      >
        <MyTextField nameLabel="Add Photo" type="text" name="image" id="image" component="input" />
      </FormikFormComponent>
      <div>
        <p>Photos in article</p>
        {images &&
          images.map((item) => {
            return (
              <div key={item}>
                <img style={{ width: "50%" }} src={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
