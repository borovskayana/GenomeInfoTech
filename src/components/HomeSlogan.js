import { Layout } from "antd";
import { Typography } from "antd";
const { Content } = Layout;
const { Title } = Typography;

function HomeSlogan() {
  return (
    <div>
      <Content
        style={{
          background: "rgba(225, 225, 225, .1)",
          height: "48vw",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            marginLeft: "50vw",
            marginBottom: "9vw",
            padding: "3em",
            background: "rgba(0, 0, 0, .6)",
          }}
        >
          <Title style={{ color: "white", lineHeight: "2em" }} level={2}>
            With a view to the future!
          </Title>

          <Title style={{ color: "white", lineHeight: "2em" }} level={4}>
            Web design, web publishing, web programming, and database management
          </Title>
        </div>
      </Content>
    </div>
  );
}
export default HomeSlogan;
