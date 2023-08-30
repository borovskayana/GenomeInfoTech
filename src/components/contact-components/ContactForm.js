import "../../css/Main.css";

import React from "react";

import { Button, Form, Input, Layout, Row, Select, ConfigProvider } from "antd";

const { Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    span: 6,
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
  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
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
            <Form.Item>
              <Row justify="end">
                <SubmitButton form={form} />
                <Button htmlType="reset">Reset</Button>
              </Row>
            </Form.Item>
          </Form>
        </Content>
      </ConfigProvider>
    </>
  );
};
export default ContactForm;
