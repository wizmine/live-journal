"use client";

import React, { useEffect, useState } from "react";
import { Flex, Input, List, Spin } from "antd";
import { useArticles } from "@/hooks/useArticles";
import { useAuth } from "@/hooks/useAuth";
import SingleArticle from "@/components/SingleArticle";
import CreateArticle from "@/ui/article/CreateArticle";

const AppContent = () => {
  const { articles, isLoading } = useArticles();
  const { user } = useAuth();
  const [searchArticle, setSearchArticle] = useState("");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShow(true));
  }, []);

  const filteredArticles = articles?.filter((article) =>
    article.content.toLowerCase().includes(searchArticle.toLowerCase())
  );

  return (
    <Flex
      vertical
      align="center"
      justify="center"
      className={`block ${isShow ? "block-show" : ""}`}
    >
      {user && <CreateArticle />}
      <Input
        type="text"
        placeholder="Search article..."
        value={searchArticle}
        style={{ width: "700px" }}
        onChange={(e) => setSearchArticle(e.target.value)}
      />
      {isLoading ? (
        <Spin />
      ) : (
        <List
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 5,
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
      )}
    </Flex>
  );
};

export default AppContent;
