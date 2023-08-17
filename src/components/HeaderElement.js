import { Menu, Layout, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const { Header } = Layout;
const { Title } = Typography;

function HeaderElement() {
  const isLaptop = useMediaQuery({ maxWidth: 768 });

  const headerStyle = isLaptop
    ? {
      background: "rgba(0, 0, 0, .6)",
      borderBottom: "2px solid white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1em",
      }
    : {
      background: "rgba(0, 0, 0, .6)",
      borderBottom: "2px solid white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5em",
    };
  
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
    <div>
      <Header
        style={headerStyle}
      >
            { isLaptop ?    <Title style={{ color: "white" }} level={4}>
          Genome InfoTech
        </Title> :    <Title style={{ color: "white" }} level={2}>
          Genome InfoTech
        </Title>}
      
        <Menu
          mode="horizontal"
          items={items}
          onClick={({ key }) => navigate(key)}
          style={{
            width: "50vw",
            background: "rgba(0, 0, 0, .0)",
            color: "white",
            alignItems: "end",
          }}
        />
      </Header>
    </div>
  );
}

export default HeaderElement;
