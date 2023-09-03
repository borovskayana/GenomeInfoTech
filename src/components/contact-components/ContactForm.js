import "../../css/Main.css";

import React from "react";

import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Layout,
  Row,
  Col,
  Select,
  ConfigProvider,
  Upload,
  Typography,
  Checkbox,
  Divider,
  Space,
} from "antd";

const { Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;
const { Title, Paragraph } = Typography;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    offset: 6,
  },
};

const validateMessages = {
  required: "Please, enter the ${label}!",
  types: {
    email: "${label} is not a valid email!",
  },
};

const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};

const ContactForm = () => {
  const [form] = Form.useForm();
  const onFinish = (value) => {
    console.log(value);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        defaultValue="Poland(+48)"
        style={{
          width: 150,
        }}
      >
        <Option value="USA(+1)">USA(+1)</Option>
        <Option value="Germany(+49)">Germany(+49)</Option>
        <Option value="Poland(+48)">Poland(+48)</Option>
        <Option value="Ukraine(+380)">Ukraine(+380)</Option>
      </Select>
    </Form.Item>
  );
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
        <Content className="content">
          <Row justify="center">
            <Space
              direction="vertical"
              style={{ display: "flex", textAlign: "center" }}
            >
              <Title level={5}>STUDIO CONTACT</Title>
              <Paragraph>
                Olivia Star, Aleja Grunwaldzka 472 c/3th floor, <br /> 80-309
                Gdańsk, Poland
              </Paragraph>
              <Paragraph>+48 111 111 111</Paragraph>
            </Space>
          </Row>
          <Row justify="center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.3696477698318!2d18.567799976400664!3d54.4034481951067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd752e9232141b%3A0x8b712d91f896657d!2sOlivia%20Centre!5e0!3m2!1sen!2sua!4v1693697799456!5m2!1sen!2sua"
              width="1000"
              height="360"
              frameBorder="0"
              style={{
                border: 0,
                borderRadius: "3em",
                filter: "contrast(60%) opacity(90%)",
              }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </Row>
        </Content>
        <Content className="content-second">
          <ConfigProvider
            theme={{
              token: { colorText: "rgba(0, 0, 0, .7)", colorSplit: "#00b96b" },
            }}
          >
            <Divider plain>
              <Title level={3}>Contact Us</Title>
            </Divider>
          </ConfigProvider>
          <Content className="content">
            <Form
              {...formItemLayout}
              form={form}
              name="validateOnly"
              autoComplete="off"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item
                name="full-name"
                label="Full Name"
                hasFeedback
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                hasFeedback
                rules={[
                  {
                    type: "email",
                    required: true,
                  },
                ]}
              >
                <Input placeholder="example@gmail.com" />
              </Form.Item>
              <Form.Item name="phone" label="Phone Number">
                <Input addonBefore={prefixSelector} />
              </Form.Item>
              <Form.Item name="company-name" label="Company Name" hasFeedback>
                <Input />
              </Form.Item>
              <Form.Item
                name="subject"
                label="Subject"
                hasFeedback
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="tell" label="Tell Us More" hasFeedback>
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item
                label="Upload"
                valuePropName="fileList"
                name="list"
                getValueFromEvent={normFile}
              >
                <Upload action="/upload.do" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>
              <Row>
                <Col offset={6}>
                  <Form.Item
                    style={{ textAlign: "justify" }}
                    extra="Information you submit here will be used as detailed in our privacy policy so we can get back to you. From time to time, we would like to contact you about news, insights and exclusive event invitations by email. If you would like to opt-in to receive these marketing emails please tick the relevant boxes below. You will be able to opt-out at any time using the links provided in our emails or by contacting us as detailed in our privacy policy."
                  ></Form.Item>
                </Col>
              </Row>
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
                <Checkbox>
                  I have read the <a href="#">agreement</a>
                </Checkbox>
              </Form.Item>
              <Form.Item
                name="notifications"
                valuePropName="checked"
                {...tailFormItemLayout}
              >
                <Checkbox>
                  I want to be invited to The Genome InfoTech Virtual Events &
                  receive other marketing comms from The Genome InfoTech
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Row justify="end">
                  <SubmitButton form={form} />
                  <Button htmlType="reset">Reset</Button>
                </Row>
              </Form.Item>
            </Form>
          </Content>
        </Content>
      </ConfigProvider>
    </>
  );
};
export default ContactForm;
