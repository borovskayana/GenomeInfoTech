import "../../css/home-css/CoFounders.css";

import { Typography, ConfigProvider } from "antd";
const { Title } = Typography;

function CofoundersTitle() {
  return (
    <ConfigProvider theme={{ token: { colorText: "#ffffff" } }}>
      <div>
        <Title className="co-founder-title" level={2}>
          Co-founders
        </Title>
      </div>
    </ConfigProvider>
  );
}
export default CofoundersTitle;
