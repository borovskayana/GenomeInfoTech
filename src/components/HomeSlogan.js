import "../css/Homepage.css";
import { Layout } from "antd";
import { Typography } from "antd";
import { useMediaQuery } from "react-responsive";

const { Content } = Layout;
const { Title } = Typography;

function HomeSlogan() {
  const isLaptop = useMediaQuery({ maxWidth: 768 });

  const contentStyle = {
    background: "rgba(225, 225, 225, .1)",
    height: "48vw",
    display: "flex",
    alignItems: "flex-end"
  };
  const titleStyle = {
    color: "white",
    lineHeight: "2em" 
  }
  return (
    <div>
      <Content
        style={contentStyle}
      >
        <div
        className="slogan-box"
        >
              { isLaptop ? <Title style={titleStyle} level={4}>
            With a view to the future!
          </Title> :  <Title style={titleStyle} level={2}>
            With a view to the future!
          </Title>}
      
          { isLaptop ? <Title style={titleStyle} level={5}>
            Web design, web publishing, web programming, and database management
          </Title> : <Title style={titleStyle} level={4}>
            Web design, web publishing, web programming, and database management
          </Title>}
          
        </div>
      </Content>
    </div>
  );
}
export default HomeSlogan;
