import "../../css/home-css/CoFounders.css";

import { Typography, ConfigProvider, Divider } from "antd";
const { Title } = Typography;

function CofoundersTitle() {
  return (
    <ConfigProvider
      theme={{ token: { colorText: "#ffffff", colorSplit: "#ffffff" } }}
    >
      <Divider className="co-founder-title" plain>
        <Title level={3}>Co-founders</Title>
      </Divider>
    </ConfigProvider>
  );
}
export default CofoundersTitle;
