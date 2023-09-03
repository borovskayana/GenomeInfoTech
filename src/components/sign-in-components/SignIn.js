import "../../css/sign-in/SignUp.css";
import React, { useState } from "react";
import { Button, ConfigProvider, Typography, theme } from "antd";
import { useLocation, Link } from "react-router-dom";

import SignInModal from "./SignInModal";
const { Title } = Typography;
const SignIn = () => {
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
          token: { colorBgElevated: "rgba(0, 0, 0, .7)" },
        }}
      >
        <Link
          to="/modal/sign-in"
          state={{ previousLocation: location }}
          onClick={showModal}
        >
          <Button type="primary"> Sign In</Button>
        </Link>

        <SignInModal
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalOpen={isModalOpen}
        />
      </ConfigProvider>
    </>
  );
};
export default SignIn;
