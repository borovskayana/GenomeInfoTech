import { Layout } from "antd";
import { Typography } from "antd";
import { Col, Row } from 'antd';
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";

const { Title } = Typography;
const { Footer } = Layout;



const style = {
  color: "white",
  alignItems: "center"
  
};

function FooterElement() {
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
  const conditions = [
    {
      label: "TERMS & CONDITIONS",
      key: "/terms",
    },
    {
      label: "PRIVACY POLICY",
      key: "/privacy",
    },
    {
      label: "COOKIE POLICY",
      key: "/policy",
    },
    {
      label: "COOKIE SETTINGS",
      key: "/settings",
    },
  ];
  const socials = [
    {
      label: "FACEBOOK",
      key: "facebook",
    },
    {
      label: "LINKEDIN",
      key: "linkedin",
    },
    {
      label: "INSTAGRAM",
      key: "instagram",
    }
  ];

  return (
    <div>
      <Footer
        style={{
          backgroundColor: "#202020",
 
        }}
      >
       
        <Row gutter={16}>
      <Col className="gutter-row" span={9}>
        <div style={style}>    <Title style={{ color: "white" }} level={2}>
          Genome InfoTech
        </Title></div>
      </Col>
      <Col className="gutter-row" span={4}>
            <div style={style}>
            <Menu
          mode="vertical"
          items={items}
          onClick={({ key }) => navigate(key)}
          style={{
    
            background: "rgba(0, 0, 0, .0)",
            color: "white",
            alignItems: "end",
          }}
        />
            </div>
      </Col>
      <Col className="gutter-row" span={5}>
        <div style={style}>  <Menu
          mode="vertical"
          items={conditions}
          onClick={({ key }) => navigate(key)}
          style={{
    
            background: "rgba(0, 0, 0, .0)",
            color: "white",
            alignItems: "end",
          }}
        /></div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={style}> <Menu
          mode="vertical"
          items={socials}
          onClick={({ key }) =>  window.location.href = `https://www.${key}.com/`}
          style={{
    
            background: "rgba(0, 0, 0, .0)",
            color: "white",
            alignItems: "end",
          }}
        /></div>
      </Col>

    </Row>
      </Footer>
    </div>
  );
}

export default FooterElement;
