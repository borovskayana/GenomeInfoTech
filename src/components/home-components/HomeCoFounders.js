import "../../css/home-css/CoFounders.css";
import { Col, Image, Typography, Space } from "antd";
import { LinkedinOutlined } from "@ant-design/icons";
const { Title } = Typography;

function HomeCoFounders({ img, name, stage, link }) {
  return (
    <>
      <Col style={{ textAlign: "center" }} span={8}>
        <Space direction="vertical" size="large">
          <div>
            {" "}
            <Image style={{ borderRadius: "50%", width: "50%" }} src={img} />
            <Title level={4}> {name}</Title>
            <Title level={5}> {stage}</Title>
          </div>

          <a href={link} className="link">
            <LinkedinOutlined style={{ fontSize: "3em" }} />
          </a>
        </Space>
      </Col>
    </>
  );
}
export default HomeCoFounders;
