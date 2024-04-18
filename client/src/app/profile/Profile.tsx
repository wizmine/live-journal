"use client";

import { useAuth } from "@/hooks/useAuth";
import { Card, Typography } from "antd";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const { user } = useAuth();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShow(true));
  }, []);

  return (
    <Card
      title={user?.name}
      style={{ width: 300 }}
      className={`block ${isShow ? "block-show" : ""}`}
    >
      <p>Email: {user?.email}</p>
      <Typography.Title level={4} style={{ marginTop: "10px" }}>
        Articles: {user?.articles.length}
      </Typography.Title>
      {user?.articles.map((item, i) => {
        return (
          <p key={i}>
            {i + 1}: {item.content}
          </p>
        );
      })}
    </Card>
  );
};

export default Profile;
