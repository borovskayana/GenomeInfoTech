import "../../css/sign-in/PersonalCabinet.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space } from "antd";
import { SettingOutlined } from "@ant-design/icons";

import { Layout, Typography, Row, Drawer } from "antd";

const { Content } = Layout;
const { Title } = Typography;

function PersonalCabinet() {
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
  return (
    <>
      <Content className="content-cabinet">
        <div style={{ textAlign: "right"}}>
          <SettingOutlined
            onClick={showDrawer}
            style={{ fontSize: "2em"}}
          />
        </div>
        <Row justify="center">
          <Title level={3}>User {nickname}</Title>{" "}
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
