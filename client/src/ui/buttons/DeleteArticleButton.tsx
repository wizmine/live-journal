import { useDeleteArticle } from "@/hooks/article/useDeleteArticle";
import { Button } from "antd";
import React from "react";

const DeleteArticleButton = ({ id }: { id: string }) => {
  const { deleteArticle } = useDeleteArticle(id);

  const handleRemove = () => {
    if (window.confirm("Are you sure you want to delete article?")) {
      deleteArticle({ id: id });
    }
  };

  return (
    <Button type="primary" onClick={handleRemove} style={{ width: "80px", margin: "6px" }} danger>
      Delete
    </Button>
  );
};

export default DeleteArticleButton;
