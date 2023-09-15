import "../../css/home-css/HomeInfoAbout.css";
import { Layout, Typography, Space, Divider, ConfigProvider } from "antd";

const { Content } = Layout;
const { Paragraph } = Typography;

function HomeInfoAbout() {
  return (
    <ConfigProvider
      theme={{
        token: { colorText: "rgba(0, 0, 0, .7)", colorSplit: "#00b96b" },
      }}
    >
      <Content className="content-style">
        <Space direction="vertical" size="large">
          <Divider />
          <>
            <Paragraph className="paragraph-style">
              Genome InfoTech a startup that provides cutting-edge data
              analytics and machine learning solutions for the healthcare
              industry. Company members share a common purpose and unite to
              achieve specific, declared goals. Companies take various forms,
              such as: voluntary associations, which may include nonprofit
              organizations, business entities, whose aim is generating profit,
              financial entities and banks, programs or educational
              institutions.
            </Paragraph>
            <Paragraph className="paragraph-style">
              Web development can range from developing a simple single static
              page of plain text to complex web applications, electronic
              businesses, and social network services. A more comprehensive list
              of tasks to which Web development commonly refers, may include Web
              engineering, Web design, Web content development, client liaison,
              client-side/server-side scripting, Web server and network security
              configuration, and e-commerce development.
            </Paragraph>
            <Paragraph className="paragraph-style">
              Web designing is the process of planning, conceptualizing, and
              implementing the plan for designing a website in a way that is
              functional and offers a good user experience. User experience is
              central to the web designing process. Websites have an array of
              elements presented in ways that make them easy to navigate.
            </Paragraph>
          </>
          <Divider />
        </Space>
      </Content>
    </ConfigProvider>
  );
}
export default HomeInfoAbout;
