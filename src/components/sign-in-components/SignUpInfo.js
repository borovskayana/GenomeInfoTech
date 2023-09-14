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
import { useNavigate } from "react-router-dom";
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

function SignUpInfo() {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  function onFinish(values) {
    let formData = JSON.parse(localStorage.getItem("formData")) || [];

    console.log("Received values of form: ", values);
    localStorage.setItem("nickname", values.nickname);
    localStorage.setItem("email", values.email);
    localStorage.setItem("password", values.password);
    localStorage.setItem("signUp", values.email);
    localStorage.setItem("photo", "");

    const emailUsers = localStorage.getItem("email");
    const passwordUsers = localStorage.getItem("password");
    const nicknameUsers = localStorage.getItem("nickname");
    const photoUsers = localStorage.getItem("photo");
    let exist =
      formData.length &&
      JSON.parse(localStorage.getItem("formData")).some(
        (data) => data.emailUsers.toLowerCase() == emailUsers.toLowerCase()
      );

    if (!exist) {
      formData.push({ emailUsers, passwordUsers, nicknameUsers, photoUsers });
      localStorage.setItem("formData", JSON.stringify(formData));
      navigate("/welcome");
    } else {
      alert(
        "Account with that email already exist. /n Please sign in or enter email that hasn't been used already!"
      );
    }
  }

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
                  {/* Captca feature under coustruction (not work yet) */}
                  <Form.Item
                    name="captcha"
                    noStyle
                    rules={[
                      {
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
                      : Promise.reject(new Error("Should accept agreement")),
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
    </>
  );
}

export default SignUpInfo;
