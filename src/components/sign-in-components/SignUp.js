import "../../css/sign-in/SignUp.css";
import React, { useState } from "react";
import { Button, Modal, ConfigProvider, Typography, theme, Space } from "antd";

import SignInForm from "./SignUpForm";
const { Title } = Typography;
const SignIn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: { colorBgElevated: "rgba(0, 0, 0, .8)" } 

        }}
      >
        <Button type="primary" onClick={showModal}>
          Sign Up
        </Button>

        <Modal
          title=""
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Space direction="vertical" size="large" className="space-sign">
            <Title level={2} className="title-sign">
              Sign Up
            </Title>

            <SignInForm />
          </Space>
        </Modal>
      </ConfigProvider>
    </>
  );
};
export default SignIn;
