import "../../css/sign-in/SignUp.css";
import { Link, useNavigate } from "react-router-dom";

import {
  Button,
  Form,
  Input,
  ConfigProvider,
  theme,
  Typography,
  Space,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
const { Title } = Typography;

function SignInInfo() {
  const navigate = useNavigate();

  const localSignUp = localStorage.getItem("nickname");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");

  const signIn = (values) => {
    console.log(values.username);
    if (values.username == localEmail && values.password == localPassword) {
      localStorage.setItem("signUp", values.username);
      navigate("/");
    } else {
      alert("Please Enter valid Credential");
    }
  };

  return (
    <>
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
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <Space direction="vertical" size="large" className="space-sign">
            <Title level={2} className="title-sign">
              Sign In
            </Title>

            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={signIn}
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
          </Space>
        </div>
      </ConfigProvider>
    </>
  );
}
export default SignInInfo;
