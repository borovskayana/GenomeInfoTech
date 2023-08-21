import "../../css/home-css/HomeSlogan.css";
import { Layout, Typography, ConfigProvider } from "antd";
import { useMediaQuery } from "react-responsive";

const { Content } = Layout;
const { Title } = Typography;

function HomeSlogan() {
  const isLaptop = useMediaQuery({ maxWidth: 768 });
  const slogan = "With a view to the future!";
  const fields =
    "Web design, web publishing, web programming, and database management";

  return (
    <ConfigProvider theme={{ token: { colorText: "#ffffff" } }}>
      <div>
        <Content className="content-slogan">
          <div className="slogan-box">
            {isLaptop ? (
              <Title level={4}>{slogan}</Title>
            ) : (
              <Title level={2}>{slogan}</Title>
            )}

            {isLaptop ? (
              <Title level={5}>{fields}</Title>
            ) : (
              <Title level={4}>{fields}</Title>
            )}
          </div>
        </Content>
      </div>
    </ConfigProvider>
  );
}
export default HomeSlogan;
