import "../../css/sign-in/PersonalCabinet.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Modal, Avatar, Space } from "antd";
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

  const cleanLocalStorage = () => {
    localStorage.clear();
    navigate("/");
  };
  let result = JSON.parse(localStorage.getItem("formData"));

  const usersData = localStorage.getItem("signUp");

  const email = result.find((x) => x.emailUsers == usersData).emailUsers;

  const indexUser = result.findIndex((object) => {
    return object.emailUsers === email;
  });

  const [changes] = Form.useForm();

  function onFinish(values) {
    console.log(values.nicknamechange);
    result[indexUser].nicknameUsers = values.nicknamechange;
    localStorage.setItem("formData", JSON.stringify(result));
  }
  const nickname = result.find((x) => x.emailUsers == usersData).nicknameUsers;
  console.log(result.splice(indexUser, indexUser + 1));
  const deleteAccount = () => {
    result.splice(indexUser, indexUser + 1);
    localStorage.setItem("formData", JSON.stringify(result));
    localStorage.removeItem("signUp");
    navigate("/");
  };
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
          <Space direction="vertical" style={{ display: "flex" }}>
            <Row>
              <Button type="primary" danger onClick={deleteAccount}>
                Delete Account
              </Button>{" "}
            </Row>
            <Row>
              {/* Temporary feature */}
              <Button type="dashed" danger onClick={cleanLocalStorage}>
                Clean LocalStorage
              </Button>
            </Row>
          </Space>
        </Drawer>
      </Content>
    </>
  );
}
export default PersonalCabinet;
