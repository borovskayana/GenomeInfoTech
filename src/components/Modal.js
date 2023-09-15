import "../css/projects-css/ProjectsData.css";

import { Modal } from "antd";

import { useState } from "react";
import { Col, Row, Image, Typography, Button } from "antd";

const { Title, Text } = Typography;

function ModalWindow({ img, name, info }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button ghost type="primary" onClick={showModal}>
        See More
      </Button>
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        {" "}
        <Row justify="center" gutter={32}>
          <Col lg={{ span: 10 }} md={{ span: 10 }} xs={{ span: 24 }}>
            {" "}
            <Image src={img} />
          </Col>
          <Col lg={{ span: 10 }} md={{ span: 10 }} xs={{ span: 24 }}>
            {" "}
            <div className="progects-titles">
              <Title level={4}>{name} </Title>
              <Text>{info} </Text>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default ModalWindow;
