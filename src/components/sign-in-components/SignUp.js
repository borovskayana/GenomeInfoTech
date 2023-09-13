import "../../css/sign-in/SignUp.css";
import React, { useState } from "react";
import { Button, ConfigProvider, theme } from "antd";
import {
  useLocation,
  Link,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

import SignUpModal from "./SignUpModal";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorBgElevated: "rgba(0, 0, 0, .8)",
            paddingContentHorizontalLG: "0",
          },
        }}
      >
        <Link
          to={`?mode=${isLogin ? "signup" : "login"}`}
          state={{ previousLocation: location }}
          onClick={showModal}
        >
          <Button type="primary"> Sign Up</Button>
        </Link>

        <SignUpModal
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalOpen={isModalOpen}
          isLogin={isLogin}
          style={{ padding: 0 }}
        />
      </ConfigProvider>
    </>
  );
};
export default SignUp;
