import { Metadata } from "next";
import React from "react";
import Auth from "./Auth";
import { Flex } from "antd";

export const metadata: Metadata = {
  title: "Auth",
};

const AuthPage = () => {
  return (
    <Flex align="center" justify="center" style={{ minHeight: "calc(100vh - 150px)" }}>
      <Auth />
    </Flex>
  );
};

export default AuthPage;
