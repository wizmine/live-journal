"use client";

import { Footer } from "antd/lib/layout/layout";
import Title from "antd/es/typography/Title";
import React, { CSSProperties, useEffect, useState } from "react";

const AppFooter = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShow(true));
  }, []);

  return (
    <Footer style={footerStyle} className={`block ${isShow ? "block-show" : ""}`}>
      <Title level={5} style={{ color: "blueviolet" }}>
        Live Journal Website
      </Title>
    </Footer>
  );
};

export default AppFooter;

const footerStyle: CSSProperties = {
  textAlign: "center",
  height: 50,
  padding: "1rem",
  color: "#fff",
  backgroundColor: "#dbebff",
};
