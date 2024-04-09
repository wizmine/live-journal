import React, { Dispatch, SetStateAction } from "react";
import { Button } from "antd";
import { useUpdateArticle } from "@/hooks/useUpdateArticle";

type Props = {
  id: string;
  newText: string;
  isEditing: boolean;
  setEditing: Dispatch<SetStateAction<boolean>>;
};

const SaveArticleButton = ({ isEditing, setEditing, id, newText }: Props) => {
  const { updateArticle } = useUpdateArticle(id);

  const handleSave = () => {
    updateArticle({ id: id, data: { content: newText } });
    setEditing(!isEditing);
  };

  return (
    <Button type="primary" onClick={handleSave}>
      Save
    </Button>
  );
};

export default SaveArticleButton;
