"use client";

import { useAuth } from "@/hooks/useAuth";
import ArticleEditScreen from "@/ui/article/ArticleEditScreen";
import ArticleScreen from "@/ui/article/ArticleScreen";
import { Flex } from "antd";
import { useState } from "react";

type Props = {
  id: string;
  content: string;
  name: string;
  authorId: string;
};

const SingleArticle = ({ id, content, name, authorId }: Props) => {
  const [isEditing, setEditing] = useState(false);
  const { user } = useAuth();
  const currentUser = user?.id === authorId;
  const filteredName = name === "" ? "Anonymous" : name;

  return (
    <Flex vertical align="center">
      {!isEditing ? (
        <ArticleScreen
          id={id}
          content={content}
          currentUser={currentUser}
          name={filteredName}
          isEditing={isEditing}
          setEditing={setEditing}
          key={id}
        />
      ) : (
        <ArticleEditScreen id={id} isEditing={isEditing} setEditing={setEditing} key={id} />
      )}
    </Flex>
  );
};

export default SingleArticle;
