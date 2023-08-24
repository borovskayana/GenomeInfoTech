import "../../css/home-css/CoFounders.css";
import { Col, Row, Image, Typography, ConfigProvider } from "antd";

const { Title, Text } = Typography;

function ProjectsHome({ img, name, stage }) {
  return (
    <>
      <ConfigProvider theme={{ token: { colorText: "rgba(0, 0, 0, .7)" } }}>
        <Row justify="center">
          <Col span={8}>
            {" "}
            <div style={{ alignSelf: "center" }}>
              <Title level={5}>{name} </Title>
              <Text>{stage} </Text>
            </div>
          </Col>

          <Col span={12}>
            {" "}
            <Image src={img} />
          </Col>
        </Row>
      </ConfigProvider>
    </>
  );
}
export default ProjectsHome;
