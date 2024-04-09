import { Button } from "antd";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  isEditing: boolean;
  setEditing: Dispatch<SetStateAction<boolean>>;
};

const EditArticleButton = ({ isEditing, setEditing }: Props) => {
  return (
    <Button
      onClick={() => setEditing(!isEditing)}
      type="primary"
      style={{ width: "80px", margin: "6px" }}
    >
      Edit
    </Button>
  );
};

export default EditArticleButton;
