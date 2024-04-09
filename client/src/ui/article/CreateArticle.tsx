"use client";

import { useCreateArticle } from "@/hooks/useCreateArticle";
import { Button, Input, Space } from "antd";
import React, { useState } from "react";

type Props = {};

const CreateArticle = (props: Props) => {
  const { createArticle } = useCreateArticle();
  const [newArticle, setNewArticle] = useState("");

  const handleSave = () => {
    createArticle({ data: { content: newArticle } });
    setNewArticle("");
  };

  return (
    <Space.Compact style={{ width: "700px", margin: 10 }}>
      <Input
        placeholder="Create article..."
        value={newArticle}
        onChange={(e) => setNewArticle(e.target.value)}
      />
      <Button type="primary" onClick={handleSave}>
        Save
      </Button>
    </Space.Compact>
  );
};

export default CreateArticle;
