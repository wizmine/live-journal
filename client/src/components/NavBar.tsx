"use client";

import React from "react";
import LogoutButton from "../ui/buttons/LogoutButton";
import { Button } from "antd";
import Link from "next/link";
import { useAuth } from "@/hooks/auth/useAuth";

const NavBar = () => {
  const { user } = useAuth();

  return (
    <nav>
      {user ? (
        <>
          <Link href={`/chat`} style={{ marginRight: "10px" }}>
            <Button type="primary">Chat</Button>
          </Link>
          <Link href={`/profile/${user.id}`} style={{ marginRight: "10px" }}>
            <Button type="primary">Profile</Button>
          </Link>
          <LogoutButton />
        </>
      ) : (
        <Link href="/auth" style={{ marginRight: "10px" }}>
          <Button type="primary">Sign In</Button>
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
