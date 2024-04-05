"use client";

import React from "react";
import LogoutButton from "./LogoutButton";
import { Button } from "antd";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

const NavBar = () => {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <LogoutButton />
      ) : (
        <Link href="/auth" style={{ marginRight: "10px" }}>
          <Button type="primary">Sign In</Button>
        </Link>
      )}
    </>
  );
};

export default NavBar;
