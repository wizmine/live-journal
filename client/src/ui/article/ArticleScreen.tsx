import React, { Dispatch, SetStateAction } from "react";
import { Card, Flex } from "antd";
import DeleteArticleButton from "../buttons/DeleteArticleButton";
import EditArticleButton from "../buttons/EditArticleButton";

type Props = {
  name: string;
  currentUser: boolean;
  content: string;
  id: string;
  isEditing: boolean;
  setEditing: Dispatch<SetStateAction<boolean>>;
};

const ArticleScreen = ({ name, content, currentUser, id, isEditing, setEditing }: Props) => {
  return (
    <Card size="small" title={name} style={{ width: 700, margin: 10 }}>
      <Flex justify="space-between" align="center">
        <p>{content}</p>
        {currentUser && (
          <div>
            <DeleteArticleButton id={id} />
            <EditArticleButton isEditing={isEditing} setEditing={setEditing} />
          </div>
        )}
      </Flex>
    </Card>
  );
};

export default ArticleScreen;
