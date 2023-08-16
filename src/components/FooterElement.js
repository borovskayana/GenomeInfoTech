import { Layout } from "antd";
import { Typography } from "antd";
const { Title } = Typography;

const { Footer } = Layout;

function FooterElement() {
  return (
    <div>
      <Footer
        style={{
          backgroundColor: "#202020",
 
        }}
      >
        <Title style={{ color: "white" }} level={2}>
          Genome InfoTech
        </Title>
      </Footer>
    </div>
  );
}

export default FooterElement;
