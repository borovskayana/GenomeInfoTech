import "../../css/projects-css/ProjectsData.css";
import symbolX from "../../img/x-symbol.svg";

import Modal from "react-modal";
import modalStyle from "../../utils/ModalStyles";
import { useState } from "react";
import {
  Col,
  Row,
  Image,
  Typography,
  ConfigProvider,
  Button,
  Space,
} from "antd";

const { Title, Text } = Typography;

function ProjectsHome({ img, name, stage, info }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <ConfigProvider
        theme={{
          token: { colorText: "rgba(0, 0, 0, .7)", colorPrimary: "#00b96b" },
        }}
      >
        <Row justify="center">
          <Col span={8}>
            {" "}
            <div className="progects-titles">
              <Space direction="vertical" size="large">
                <Title level={5}>{name} </Title>
                <Text>{stage} </Text>

                <div>
                  <Button ghost type="primary" onClick={openModal}>
                    See More
                  </Button>

                  <Modal
                    isOpen={modalIsOpen}
                    ariaHideApp={false}
                    onRequestClose={closeModal}
                    style={modalStyle}
                    contentLabel="Example Modal"
                  >
                    <img
                      src={symbolX}
                      width="18em"
                      className="projects-img"
                      onClick={closeModal}
                    />

                    <Row justify="center">
                      <Col span={10}>
                        {" "}
                        <Image src={img} />
                      </Col>
                      <Col span={10}>
                        {" "}
                        <div className="progects-titles">
                          <Title level={4}>{name} </Title>
                          <Text>{info} </Text>
                        </div>
                      </Col>
                    </Row>
                  </Modal>
                </div>
              </Space>
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
