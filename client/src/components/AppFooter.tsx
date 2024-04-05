import { Footer } from "antd/lib/layout/layout";
import Title from "antd/es/typography/Title";
import React, { CSSProperties } from "react";

const AppFooter = () => {
  return (
    <Footer style={footerStyle}>
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
