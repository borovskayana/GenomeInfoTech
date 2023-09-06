import "../../css/projects-css/ProjectsData.css";
import ModalWindow from "../Modal";
import { Col, Image, Typography, Space } from "antd";

const { Title, Text } = Typography;

function NewsListMain({ img, name, stage, info }) {
  return (
    <>
      <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 16 }}>
        {" "}
        <Image src={img} />{" "}
        <Space direction="vertical" size="large">
          <Title level={5}> {name} </Title>
          <Text>{stage} </Text>

          <div>
            <ModalWindow img={img} name={name} stage={stage} info={info} />
          </div>
        </Space>
      </Col>
    </>
  );
}
export default NewsListMain;
