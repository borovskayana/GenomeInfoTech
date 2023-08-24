import "../../css/projects-css/ProjectsData.css";
import ModalWindow from "../Modal";
import { Col, Row, Image, Typography, Space } from "antd";

const { Title, Text } = Typography;

function ProjectsHome({ img, name, stage, info }) {
  return (
    <>
      <Row justify="center">
        <Col span={8}>
          {" "}
          <div className="progects-titles">
            <Space direction="vertical" size="large">
              <Title level={5}>{name} </Title>
              <Text>{stage} </Text>

              <div>
                <ModalWindow img={img} name={name} stage={stage} info={info} />
              </div>
            </Space>
          </div>
        </Col>

        <Col span={12}>
          {" "}
          <Image src={img} />
        </Col>
      </Row>
    </>
  );
}
export default ProjectsHome;
