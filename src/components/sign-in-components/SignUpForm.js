import "../../css/sign-in/SignUp.css";
import { Link } from "react-router-dom";

import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  ConfigProvider,
  theme,
  Typography,
  Space,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const SignUpForm = ({ isLogin }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    localStorage.setItem("nickname", values.nickname);
    localStorage.setItem("email", values.email);
    localStorage.setItem("password", values.password);

    alert("Account created successfully!!");
    window.location.reload();
  };
  const signIn = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {isLogin ? (
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
          </ConfigProvider>
        ) : (
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
            <Space direction="vertical" size="large" className="space-sign">
              <Title level={2} className="title-sign">
                Sign Up
              </Title>
              <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                  prefix: "86",
                }}
                style={{
                  maxWidth: 600,
                }}
                scrollToFirstError
              >
                <Form.Item
                  name="nickname"
                  label="Nickname"
                  tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: "Please input your nickname!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password style={{ color: "#000000" }} />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The new password that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="Captcha"
                  extra="We must make sure that your are a human."
                >
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item
                        name="captcha"
                        noStyle
                        rules={[
                          {
                            required: true,
                            message: "Please input the captcha you got!",
                          },
                        ]}
                      >
                        <Input style={{ color: "#000000" }} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Button>Get captcha</Button>
                    </Col>
                  </Row>
                </Form.Item>

                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error("Should accept agreement")
                            ),
                    },
                  ]}
                  {...tailFormItemLayout}
                >
                  <Checkbox style={{ color: "#ffffff" }}>
                    I have read the <a href="#">agreement</a>
                  </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </Space>
          </ConfigProvider>
        )}
        <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
          {isLogin ? (
            <div className="div-1">
              <span className="span-1">Don't have an account yet?</span>
              <span className="span-2">Register</span>
            </div>
          ) : (
            <div className="div-2">
              <span className="span-1">Already a member?</span>
              <span className="span-2">Log in</span>
            </div>
          )}
        </Link>
      </div>
    </>
  );
};
export default SignUpForm;
