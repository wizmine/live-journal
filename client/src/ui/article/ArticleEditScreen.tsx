import React, { Dispatch, SetStateAction, useState } from "react";
import { Input, Space } from "antd";
import SaveArticleButton from "../buttons/SaveArticleButton";

type Props = {
  id: string;
  isEditing: boolean;
  setEditing: Dispatch<SetStateAction<boolean>>;
};

const ArticleEditScreen = ({ id, isEditing, setEditing }: Props) => {
  const [newText, setNewText] = useState("");

  return (
    <Space.Compact style={{ width: "100%", margin: 40 }}>
      <Input
        placeholder="Edit article..."
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <SaveArticleButton
        id={id}
        isEditing={isEditing}
        setEditing={setEditing}
        newText={newText}
        key={id}
      />
    </Space.Compact>
  );
};

export default ArticleEditScreen;
