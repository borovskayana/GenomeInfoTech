import "../css/HeaderStyle.css";
import items from "../data/Items";
import { Menu, Layout, Typography, ConfigProvider, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const { Header } = Layout;
const { Title } = Typography;

function HeaderElement() {
  const isLaptop = useMediaQuery({ maxWidth: 768 });
  const title = "Genome InfoTech";

  const navigate = useNavigate();

  return (
    <ConfigProvider theme={{ token: { colorText: "#ffffff", colorPrimary: "#00b96b" } }}>
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
            style={{
              width: "35vw",
              background: "rgba(0, 0, 0, .0)",
              marginLeft: "20%"
     
            }}
          />
          <Button type="primary">Sign in</Button>
        </Header>
      </div>
    </ConfigProvider>
  );
}

export default HeaderElement;
