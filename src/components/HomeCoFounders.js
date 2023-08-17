import "../css/Homepage.css";
import { Layout, Typography, Col, Row, Image } from "antd";
import { useMediaQuery } from "react-responsive";
import ReadMore from "../components/ReadMore";

import cofounderOne from "../img/co_founder_img_one.jpeg";
import cofounderTwo from "../img/co_founder_img_two.jpeg";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function HomeCoFounders() {
  const isLaptop = useMediaQuery({ maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const contentStyle = isLaptop
    ? {
        padding: "0em 2em",
        marginBottom: "20em",
      }
    : {
        padding: "0em 8em",
        marginBottom: "20em",
      };

  const titleStyle = {
    textAlign: "center",
    color: "white",
    lineHeight: "3em",
    background: "rgba(31, 102, 16, .2)",
  };
  const titleNameStyle = {
    textAlign: "center",
    color: "#606060",
  };
 
  const imageStyle = 
    {

    width: "100%",
    borderRadius: "50%",
    margin: "0",
    padding: "3em",
    };
 
  const  paragraphStyle = isLaptop
  ? {
    fontSize: "0.7em",
    textAlign: "justify",
    lineHeight: "2em",
    padding: "0 1em",
    }
  : {
    fontSize: "1em",
    textAlign: "justify",
    lineHeight: "2.5em",
    padding: "0 1em",
    };

  const cofounderOneBio = `  With over 29 years of IT management, technology consulting, and development experience, I am a seasoned Delivery Manager at EPAM Systems, a leading global provider of digital platform engineering and software development services.
  My mission is to design and build innovative solution components within the EPAM Fast-Data platform, focusing on accelerating the adoption of event streaming as a platform for data-driven enterprises. I leverage my expertise in microservices architecture, Java, Spring Boot, and Kafka APIs to deliver high-quality and scalable solutions that meet the needs and expectations of our clients.
  I am also a co-founder and CEO of Genome InfoTech, a startup that provides cutting-edge data analytics and machine learning solutions for the healthcare industry. I lead a team of talented data scientists and engineers who use Scala, Spark, Hadoop, AWS, and GCP to create and deploy data pipelines, models, and applications that help improve health outcomes and reduce costs.
  I have a strong educational background in engineering, ecology, and land cadastre, as well as executive education from IESE Business School and MIT Sloan Executive Education. I hold several professional certifications, including Professional Scrum Master (PSM I, SPS), Google Cloud Certified Professional Data Engineer, Oracle Certified Associate, Java SE 7, and ITIL 4 Foundation. I am passionate about learning new technologies and skills, and I continuously seek opportunities to grow and challenge myself.`;

  const cofounderTwoBio = `   Experienced in project management related to the sale or lease of state land to legal entities or individuals for the public, commercial, industrial, and other investment projects with over 16 years as an effective link between project developers, key stakeholders (authorities and state governments), and business partners (investors).
    Excellent reputation for resolving problems and improving key stakeholders' satisfaction. Great communication skills, listening skills. Team player and can find a common language with people from different backgrounds, authority, age, work, and life experiences. Strong business development professional graduated from The London School of Economics and Political Science (LSE).`;

  return (
    <div>
      <div className="co-founder-title">
        <Title
          style={{
            textAlign: "center",

            lineHeight: "4em",
            color: "white",
          }}
          level={2}
        >
          Co-founders
        </Title>
      </div>
      <Content style={contentStyle}>
        <div className="co-founder">
          <Row gutter={16}>
          {!isMobile ? <Col span={8}>
              <Image src={cofounderOne} style={imageStyle} />
            </Col> : false}
            <Col xs={{ span: 24}} sm={{ span: 15}}>
              { isMobile ?  <div><Title style={titleNameStyle} level={5}>
              Nadiia Plaksii
              </Title> <Image src={cofounderOne} style={imageStyle} /></div> :  <Title style={titleNameStyle} level={3}>
              Nadiia Plaksii
              </Title>}
            
              { isMobile ?     <Title style={titleStyle} level={5}>
                Co-founder / Project Manager
              </Title> :    <Title style={titleStyle} level={4}>
                Co-founder / Project Manager
              </Title>}
            

              <Paragraph style={paragraphStyle}>
                <div className="css-fix">
                  <ReadMore>{cofounderTwoBio}</ReadMore>
                </div>
              </Paragraph>
            </Col>
          </Row>
        </div>
        <div className="co-founder">
          <Row gutter={16}>
          {!isMobile ? <Col span={8}>
              <Image src={cofounderTwo} style={imageStyle} />
            </Col> : false}
            <Col xs={{ span: 24}} sm={{ span: 15}}>
              { isMobile ?  <div><Title style={titleNameStyle} level={5}>
              Vladislav Plaksy
              </Title> <Image src={cofounderTwo} style={imageStyle} /></div> :  <Title style={titleNameStyle} level={3}>
              Vladislav Plaksy
              </Title>}
            
              { isLaptop ?     <Title style={titleStyle} level={5}>
                Co-founder / Web developer
              </Title> :    <Title style={titleStyle} level={4}>
                Co-founder / Web developer
              </Title>}
            

              <Paragraph style={paragraphStyle}>
                <div className="css-fix">
                  <ReadMore>{cofounderOneBio}</ReadMore>
                </div>
              </Paragraph>
            </Col>
          </Row>
        </div>

        
      </Content>
    </div>
  );
}

export default HomeCoFounders;
