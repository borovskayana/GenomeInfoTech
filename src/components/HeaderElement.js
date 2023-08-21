import "../css/HeaderStyle.css";
import { Menu, Layout, Typography, ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const { Header } = Layout;
const { Title } = Typography;

function HeaderElement() {
  const isLaptop = useMediaQuery({ maxWidth: 768 });
  const title = "Genome InfoTech";

  const navigate = useNavigate();
  const items = [
    {
      label: "ABOUT US",
      key: "/",
    },
    {
      label: "PROJECTS",
      key: "/projects",
    },
    {
      label: "NEWS",
      key: "/news",
    },
    {
      label: "CONTACT US",
      key: "/contact",
    },
  ];
  return (
    <ConfigProvider theme={{ token: { colorText: "#ffffff" } }}>
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
              width: "50vw",
              background: "rgba(0, 0, 0, .0)",
            }}
          />
        </Header>
      </div>
    </ConfigProvider>
  );
}

export default HeaderElement;
