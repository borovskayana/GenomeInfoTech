import "../../css/home-css/CoFounders.css";
import { Col, Image, Typography, Divider, Space, ConfigProvider } from "antd";
import { LinkedinOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const { Title, Text } = Typography;

function HomeCoFounders({ img, name, stage, link }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });

  return (
    <>
      <ConfigProvider theme={{ token: { colorText: "rgba(0, 0, 0, .7)" } }}>
        <Col
          className="cofounders-text"
          lg={{ span: 7 }}
          md={{ span: 8 }}
          sm={{ span: 8 }}
          xs={{ span: 14 }}
        >
          <Space direction="vertical" size="large">
            {" "}
            <div>
              <Image style={{ borderRadius: "50%", width: "40%" }} src={img} />
            </div>
            <div>
              <Title level={5}> {name}</Title>
              <Text level={5}> {stage}</Text>
            </div>
            <div>
              <a href={link} className="link">
                <LinkedinOutlined
                  style={{
                    fontSize: "2.6em",
                    backgroundColor: "#0A66C2",
                    borderRadius: "6px",
                  }}
                />
              </a>
            </div>
          </Space>
        </Col>
        {isMobile ? <Divider /> : false}
      </ConfigProvider>
    </>
  );
}
export default HomeCoFounders;
