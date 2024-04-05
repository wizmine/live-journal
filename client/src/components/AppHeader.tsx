import React, { CSSProperties } from "react";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import NavBar from "./NavBar";

const AppHeader = () => {
  return (
    <Header style={headerStyle}>
      <Title level={3}>
        <Link href="/">Live Journal</Link>
      </Title>
      <Flex align="center">
        <NavBar />
      </Flex>
    </Header>
  );
};

export default AppHeader;

const headerStyle: CSSProperties = {
  width: "100%",
  textAlign: "center",
  height: 60,
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "aliceblue",
  boxShadow: "10px 5px black",
};
