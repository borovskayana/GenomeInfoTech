import { Layout } from "antd";
import { Typography } from "antd";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { useMediaQuery } from "react-responsive";

const { Title } = Typography;
const { Footer } = Layout;

function FooterElement() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const style = isMobile
    ? {
        color: "white",
        alignItems: "center",
        textAlign: "center",
      }
    : {
        color: "white",
        alignItems: "center",
        textAlign: "start",
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
    },
  ];

  return (
    <div>
      <Footer
        style={{
          backgroundColor: "#202020",
        }}
      >
        <Row
          gutter={[
            { xs: 0, sm: 16, md: 0, lg: 32 },
            { xs: 16, sm: 16, md: 0, lg: 0 },
          ]}
        >
          <Col
            className="gutter-row"
            lg={{ span: 8 }}
            md={{ span: 5 }}
            xs={{ span: 24 }}
          >
            <div style={style}>
              {" "}
              <Title style={{ color: "white" }} level={2}>
                Genome InfoTech
              </Title>
            </div>
          </Col>
          <Col
            className="gutter-row"
            lg={{ span: 5 }}
            md={{ span: 6 }}
            xs={{ span: 24 }}
          >
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
          <Col
            className="gutter-row"
            lg={{ span: 6 }}
            md={{ span: 7 }}
            xs={{ span: 24 }}
          >
            <div style={style}>
              {" "}
              <Menu
                mode="vertical"
                items={conditions}
                onClick={({ key }) => navigate(key)}
                style={{
                  background: "rgba(0, 0, 0, .0)",
                  color: "white",
                  alignItems: "end",
                }}
              />
            </div>
          </Col>
          <Col
            className="gutter-row"
            lg={{ span: 5 }}
            md={{ span: 6 }}
            xs={{ span: 24 }}
          >
            <div style={style}>
              {" "}
              <Menu
                mode="vertical"
                items={socials}
                onClick={({ key }) =>
                  (window.location.href = `https://www.${key}.com/`)
                }
                style={{
                  background: "rgba(0, 0, 0, .0)",
                  color: "white",
                  alignItems: "end",
                }}
              />
            </div>
          </Col>
        </Row>
      </Footer>
    </div>
  );
}

export default FooterElement;
