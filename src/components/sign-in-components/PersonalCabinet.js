import "../../css/sign-in/PersonalCabinet.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Modal, Avatar } from "antd";
import { SettingOutlined, EditOutlined } from "@ant-design/icons";

import { Layout, Typography, Row, Drawer } from "antd";

const { Content } = Layout;
const { Title } = Typography;

function PersonalCabinet() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
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

  const [isModalImgOpen, setIsModalImgOpen] = useState(false);
  const showModalImg = () => {
    setIsModalImgOpen(true);
  };
  const handleImgOk = () => {
    setIsModalImgOpen(false);
  };
  const handleImgCancel = () => {
    setIsModalImgOpen(false);
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const deleteAccount = () => {
    localStorage.clear();
    navigate("/");
  };

  const nickname = localStorage.getItem("nickname");
  const [changes] = Form.useForm();

  function onFinish(values) {
    console.log(values.nicknamechange);
    localStorage.setItem("nickname", values.nicknamechange);
  }

  return (
    <>
      <Content className="content-cabinet">
        <div style={{ textAlign: "right" }}>
          <SettingOutlined onClick={showDrawer} style={{ fontSize: "2em" }} />
        </div>
        <Row justify="center">
          <Title level={3}>User {nickname}</Title>{" "}
          <EditOutlined onClick={showModal} />
        </Row>

        <Modal
          title="Change Data"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Form
            form={changes}
            name="changes"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="nicknamechange"
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
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => window.location.reload()}
              >
                Save changes
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Row justify="center">
          {" "}
          <EditOutlined onClick={showModalImg} />{" "}
          <Modal
            title="Add Image"
            open={isModalImgOpen}
            onOk={handleImgOk}
            onCancel={handleImgCancel}
            footer={null}
          >
            <input type="file" onChange={handleChange} />
          </Modal>
          <Avatar src={file} size={200} onClick={showModalImg} />
        </Row>
        <Drawer
          title="Settings"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <Button type="primary" onClick={deleteAccount}>
            Delete Account
          </Button>
        </Drawer>
      </Content>
    </>
  );
}
export default PersonalCabinet;
