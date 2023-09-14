import "../css/HeaderStyle.css";
import items from "../data/Items";
import SignUp from "./sign-in-components/SignUp";
import LogOut from "./sign-in-components/LogOut";

import { Menu, Layout, Typography, ConfigProvider, Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const { Header } = Layout;
const { Title } = Typography;

function HeaderElement() {
  const location = useLocation();
  const path = location.pathname;
  const localEmail = localStorage.getItem("signUp");
  const localPassword = localStorage.getItem("password");
  const isLaptop = useMediaQuery({ maxWidth: 768 });
  const title = "Genome InfoTech";

  const navigate = useNavigate();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#ffffff",
          colorPrimary: "#00b96b",
          colorBgElevated: "rgba(0, 0, 0, .6)",
        },
      }}
    >
      <div>
        <Header className="header-style">
          {isLaptop ? (
            <Title level={4}>{title}</Title>
          ) : (
            <Title level={2}>{title}</Title>
          )}

          <Menu
            mode="horizontal"
            items={items}
            onClick={({ key }) => navigate(key)}
            defaultSelectedKeys={[`${path}`]}
            style={{
              width: "35vw",
              background: "rgba(0, 0, 0, .0)",
              marginLeft: "20%",
            }}
          />
          {localEmail ? <LogOut /> : <SignUp />}
        </Header>
      </div>
    </ConfigProvider>
  );
}

export default HeaderElement;
