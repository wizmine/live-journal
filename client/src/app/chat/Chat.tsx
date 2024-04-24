"use client";

import React, { useEffect, useState } from "react";
import { Select, Tabs } from "antd";
import Messages from "@/components/Messages";
import { useAuth } from "@/hooks/auth/useAuth";
import { useAllUsers } from "@/hooks/user/useAllUsers";
import { useCreateChat } from "@/hooks/chat/useCreateChat";
import { useConnectSocket } from "@/hooks/socket/useConnectSocket";

const Chat = () => {
  const [isShow, setIsShow] = useState(false);
  const { createChat } = useCreateChat();
  const { users } = useAllUsers();
  const { user } = useAuth();
  useConnectSocket();

  useEffect(() => {
    setTimeout(() => setIsShow(true));
  }, []);

  const onChange = (value: string) => {
    const data = {
      firstUser: user!.id,
      secondUser: value,
    };

    createChat(data);
  };

  const filteredUsers = users?.filter((item) => item.id !== user?.id);
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <div className={`block ${isShow ? "block-show" : ""}`}>
      <Select
        showSearch
        placeholder="Select a person to start chat"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={filterOption}
        options={filteredUsers?.map((item) => {
          return {
            value: item.id,
            label: item.name,
          };
        })}
      />
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        style={{ height: "100%" }}
        items={user?.chats.map((chat) => {
          const secondUser = chat.participants.find((item) => item.id !== user.id);
          const id = chat.id;
          return {
            label: secondUser?.name,
            key: id,
            children: <Messages messages={chat.messages} chatId={id} />,
          };
        })}
      />
    </div>
  );
};

export default Chat;
