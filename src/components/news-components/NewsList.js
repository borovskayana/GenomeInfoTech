import "../../css/projects-css/ProjectsData.css";
import ModalWindow from "../Modal";
import { Col, Image, Typography, Space } from "antd";

const { Title, Text } = Typography;

function NewsList({ img, name, stage, info }) {
  return (
    <>
      <Col span={6}>
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
export default NewsList;
