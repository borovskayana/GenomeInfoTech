import "../../css/projects-css/ProjectsData.css";
import ModalWindow from "../Modal";
import { Col, Row, Image, Typography, Space } from "antd";

const { Title, Text } = Typography;

function ProjectsHome({ img, name, stage, info, id }) {
  const a = Number(`${id}`);
  let stages;
  a % 2 === 0 ? (stages = { float: "left", textAlign: "start" }) : (stages = { float: "right", textAlign: "end" }) 

  return (
    <>
      <Row justify="center" className="row-content">
        {`${a}` % 2 === 0 ? (
          false
        ) : (
          <Col span={12}>
            {" "}
            <Image src={img} />{" "}
          </Col>
        )}
        <Col span={8}>
          {" "}
          <div style={stages}>
            <Space direction="vertical" size="large">
              <Title level={5}> {name} </Title>
              <Text>{stage} </Text>

              <div>
                <ModalWindow img={img} name={name} stage={stage} info={info} />
              </div>
            </Space>
          </div>
        </Col>
        {`${a}` % 2 === 0 ? (
          <Col span={12}>
            {" "}
            <Image src={img} />{" "}
          </Col>
        ) : (
          false
        )}
      </Row>
    </>
  );
}
export default ProjectsHome;
