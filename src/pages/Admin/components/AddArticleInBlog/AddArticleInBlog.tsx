import React from "react";
import { AdminContainer } from "../AdminContainer";
import { TextEditor } from "./components/TextEditor";

export const AddArticleInBlog: React.FC = () => {
  return (
    <AdminContainer title="Add new article in blog" linkBack={{ title: "Return", link: "/admin" }}>
      <TextEditor />
    </AdminContainer>
  );
};
