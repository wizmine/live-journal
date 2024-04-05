"use client";

import { useArticles } from "@/hooks/useArticles";
import { Button, Flex, Input, List, Space } from "antd";
import React, { useState } from "react";
import SingleArticle from "./SingleArticle";
import { useCreateArticle } from "@/hooks/useCreateArticle";
import { useAuth } from "@/hooks/useAuth";

const ArticlesView = () => {
  const { articles } = useArticles();
  const { createArticle } = useCreateArticle();
  const { user } = useAuth();
  const [searchArticle, setSearchArticle] = useState("");
  const [newArticle, setNewArticle] = useState("");
  const reversedData = articles?.reverse();

  const filteredArticles = reversedData?.filter((article) =>
    article.content.toLowerCase().includes(searchArticle.toLowerCase())
  );

  const handleSave = () => {
    createArticle({ data: { content: newArticle } });
    setNewArticle("");
  };

  return (
    <Flex vertical align="center" justify="center">
      {user && (
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
      )}
      <Input
        type="text"
        placeholder="Search article..."
        value={searchArticle}
        style={{ width: "700px" }}
        onChange={(e) => setSearchArticle(e.target.value)}
      />
      <List
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 6,
          align: "center",
        }}
        dataSource={filteredArticles}
        style={{ width: "700px" }}
        renderItem={(item) => (
          <SingleArticle
            authorId={item.author.id}
            id={item.id}
            name={item.author.name}
            content={item.content}
          />
        )}
      />
    </Flex>
  );
};

export default ArticlesView;
