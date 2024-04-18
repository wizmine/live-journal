import SocketApi from "@/api/socket-api";
import { useAuth } from "@/hooks/useAuth";
import { useUpdateUser } from "@/hooks/useUpdateUser";
import { Button, Flex, Input, Space } from "antd";
import React, { useState } from "react";

type Props = {
  messages: {
    id: string;
    content: string;
    senderName: string;
    senderId: string;
    chatId: string;
    createdAt: number;
  }[];
  chatId: string;
};

const Messages = ({ messages, chatId }: Props) => {
  const [newMessage, setNewMessage] = useState("");
  const { updateUser } = useUpdateUser();
  const { user } = useAuth();
  console.log(user);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    SocketApi.socket?.emit("server-message", {
      senderId: user!.id,
      content: newMessage,
      chatId: chatId,
      senderName: user!.name,
    });

    updateUser();
    setNewMessage("");
  };

  const filteredData = messages.map((message) => {
    const isCurrentUser = user?.id === message.senderId;

    return (
      <div
        style={{ textAlign: `${isCurrentUser ? "right" : "left"}`, padding: "10px" }}
        key={message.id}
      >
        <h4>{message.senderName}</h4>
        <p>{message.content}</p>
      </div>
    );
  });

  return (
    <Flex vertical justify="flex-end" style={{ height: "calc(100vh - 180px)" }}>
      {filteredData}
      <Space.Compact style={{ width: "100%" }}>
        <Input
          placeholder="Enter new message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button type="primary" onClick={handleSendMessage}>
          Submit
        </Button>
      </Space.Compact>
    </Flex>
  );
};

export default Messages;
