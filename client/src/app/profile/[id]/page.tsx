import { Metadata } from "next";
import React from "react";
import Profile from "../Profile";
import { Flex } from "antd";

export const metadata: Metadata = {
  title: "Profile",
};

const ProfilePage = () => {
  return (
    <Flex align="center" justify="center" style={{ minHeight: "calc(100vh - 150px)" }}>
      <Profile />
    </Flex>
  );
};

export default ProfilePage;
