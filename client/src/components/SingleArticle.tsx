"use client";

import { useAuth } from "@/hooks/useAuth";
import { useDeleteArticle } from "@/hooks/useDeleteArticle";
import { useUpdateArticle } from "@/hooks/useUpdateArticle";
import { Button, Flex, Input, Space } from "antd";
import Card from "antd/es/card/Card";
import { useState } from "react";

type Props = {
  id: string;
  content: string;
  name: string;
  authorId: string;
};

const SingleArticle = ({ id, content, name, authorId }: Props) => {
  const [isEditing, setEditing] = useState(false);
  const [newText, setNewText] = useState("");
  const { user } = useAuth();
  const { updateArticle } = useUpdateArticle(id);
  const { deleteArticle } = useDeleteArticle(id);

  const currentUser = user?.id === authorId;

  const handleRemove = () => {
    if (window.confirm("Are you sure you want to delete article?")) {
      deleteArticle({ id: id });
    }
  };

  const handleSave = () => {
    updateArticle({ id: id, data: { content: newText } });
    setEditing(!isEditing);
  };

  const articleScreen = () => (
    <Card size="small" title={name} style={{ width: 700, margin: 10 }}>
      <Flex justify="space-between" align="center">
        <p>{content}</p>
        {currentUser && (
          <div>
            <Button
              type="primary"
              onClick={handleRemove}
              style={{ width: "80px", margin: "6px" }}
              danger
            >
              Delete
            </Button>
            <Button
              onClick={() => setEditing(!isEditing)}
              type="primary"
              style={{ width: "80px", margin: "6px" }}
            >
              Edit
            </Button>
          </div>
        )}
      </Flex>
    </Card>
  );

  const editScreen = () => (
    <Space.Compact style={{ width: "100%", margin: 40 }}>
      <Input
        placeholder="Edit article..."
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <Button type="primary" onClick={handleSave}>
        Save
      </Button>
    </Space.Compact>
  );

  return (
    <Flex vertical align="center">
      {!isEditing ? articleScreen() : editScreen()}
    </Flex>
  );
};

export default SingleArticle;
