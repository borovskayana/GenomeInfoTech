import { Image, Typography, Layout } from "antd";

import ModalWindow from "../Modal";

const { Title, Text } = Typography;
const { Content } = Layout;

function FirstProject({ img, name, stage, info }) {
  return (
    <>
      <Content>
              <div className="first-project">
                  <div>
          <Title level={2}>{name}</Title>
                      <Text>{stage}</Text>
                      </div>
          <Image src={img} style={{ width: "50%" }} />
        </div>
        <div className="first-modal">
          <ModalWindow img={img} name={name} info={info} />
        </div>
      </Content>
    </>
  );
}

export default FirstProject;
