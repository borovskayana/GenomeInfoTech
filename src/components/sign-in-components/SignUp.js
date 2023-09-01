import "../../css/sign-in/SignUp.css";
import React, { useState } from "react";
import { Button, ConfigProvider, Typography, theme } from "antd";
import {  useLocation, Link } from "react-router-dom";

import SignUpModal from "./SignUpModal";
const { Title } = Typography;
const SignUp = () => {
  const location = useLocation();

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
          token: { colorBgElevated: "rgba(0, 0, 0, .6)" },
        }}
      >
        <Link to="/modal/sign-up" state={{ previousLocation: location }}>
          <Button type="primary" onClick={showModal}>
            Sign Up
          </Button>
        </Link>

        <SignUpModal
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalOpen={isModalOpen}
        />
      </ConfigProvider>
    </>
  );
};
export default SignUp;
