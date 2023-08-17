import { Layout, Typography, Divider } from "antd";

const { Content } = Layout;
const { Paragraph } = Typography;

function HomeInfoAbout() {
  return (
    <div>
      <Content
        style={{
          padding: "0em 15em",
          marginTop: "4em",
        }}
      >
        <Divider
          style={{
            margin: "4em 0",
            borderTop: "0.2em solid rgba(31, 102, 16, .3)",
          }}
        />
        <Paragraph
          style={{
            fontSize: "1.2em",
            textAlign: "justify",
            lineHeight: "2.6em",
          }}
        >
          Company members share a common purpose and unite to achieve specific,
          declared goals. Companies take various forms, such as: voluntary
          associations, which may include nonprofit organizations, business
          entities, whose aim is generating profit, financial entities and
          banks, programs or educational institutions
        </Paragraph>
        <Paragraph
          style={{
            fontSize: "1.2em",
            textAlign: "justify",
            lineHeight: "2.6em",
          }}
        >
          Web development can range from developing a simple single static page
          of plain text to complex web applications, electronic businesses, and
          social network services. A more comprehensive list of tasks to which
          Web development commonly refers, may include Web engineering, Web
          design, Web content development, client liaison,
          client-side/server-side scripting, Web server and network security
          configuration, and e-commerce development.
        </Paragraph>
        <Paragraph
          style={{
            fontSize: "1.2em",
            textAlign: "justify",
            lineHeight: "2.6em",
          }}
        >
          Web designing is the process of planning, conceptualizing, and
          implementing the plan for designing a website in a way that is
          functional and offers a good user experience. User experience is
          central to the web designing process. Websites have an array of
          elements presented in ways that make them easy to navigate.
        </Paragraph>
        <Divider
          style={{
            margin: "4em 0",
            borderTop: "0.2em solid rgba(31, 102, 16, .3)",
          }}
        />
      </Content>
    </div>
  );
}
export default HomeInfoAbout;
