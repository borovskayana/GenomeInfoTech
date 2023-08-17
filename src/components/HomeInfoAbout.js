import "../css/HomeInfoAbout.css";
import { Layout, Typography, Divider } from "antd";
import { useMediaQuery } from "react-responsive";

const { Content } = Layout;
const { Paragraph, Text } = Typography;

function HomeInfoAbout() {
  const isLaptop = useMediaQuery({ maxWidth: 768 });

  const contentStyle = isLaptop
    ? {
        padding: "0em 5em",
        marginTop: "4em",
      }
    : {
        padding: "0em 15em",
        marginTop: "4em",
      };
  const paragraphStyle = isLaptop
    ? {
        fontSize: "0.9em",
        textAlign: "justify",
        lineHeight: "2em",
      }
    : {
        fontSize: "1.1em",
        textAlign: "justify",
        lineHeight: "2.6em",
      };
  return (
    <div>
      <Content style={contentStyle}>
        <hr />
        <Paragraph style={paragraphStyle}>
          Company members share a common purpose and unite to achieve specific,
          declared goals. Companies take various forms, such as: voluntary
          associations, which may include nonprofit organizations, business
          entities, whose aim is generating profit, financial entities and
          banks, programs or educational institutions
        </Paragraph>
        <Paragraph style={paragraphStyle}>
          Web development can range from developing a simple single static page
          of plain text to complex web applications, electronic businesses, and
          social network services. A more comprehensive list of tasks to which
          Web development commonly refers, may include Web engineering, Web
          design, Web content development, client liaison,
          client-side/server-side scripting, Web server and network security
          configuration, and e-commerce development.
        </Paragraph>
        <Paragraph style={paragraphStyle}>
          Web designing is the process of planning, conceptualizing, and
          implementing the plan for designing a website in a way that is
          functional and offers a good user experience. User experience is
          central to the web designing process. Websites have an array of
          elements presented in ways that make them easy to navigate.
        </Paragraph>
        <hr />
      </Content>
    </div>
  );
}
export default HomeInfoAbout;
