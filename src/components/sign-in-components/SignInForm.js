import "../../css/sign-in/SignIn.css";
import React from "react";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, ConfigProvider, theme } from "antd";

const SignInForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.lightAlgorithm,
        token: {
          colorText: "#000000",
          colorTextHeading: "#ffffff",
          colorTextDescription: "rgba(225, 225, 225, .6)",
        },
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password?
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};
export default SignInForm;
