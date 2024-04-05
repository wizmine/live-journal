"use client";

import { authService } from "@/services/auth.service";
import { IAuthForm } from "@/types/auth.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Flex, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const { push } = useRouter();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: IAuthForm) => authService.main(isLoginForm ? "login" : "register", data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["auth/login/access-token"],
      });
      push("/");
    },
  });

  const onSubmit = (data: IAuthForm) => {
    mutate(data);
  };

  return (
    <Flex align="center" justify="center">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ adminPanel: true }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        {!isLoginForm && (
          <Form.Item<IAuthForm>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
        )}

        <Form.Item<IAuthForm>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!", type: "email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IAuthForm>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Min length 6", min: 6 }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Button onClick={() => setIsLoginForm(!isLoginForm)}>
          Swap to
          {!isLoginForm ? " login" : " register"}
        </Button>
      </Form>
    </Flex>
  );
};

export default Auth;
