import { Layout } from "antd";
import { Typography } from "antd";
import { Col, Row } from "antd";
import { Image } from "antd";
import Earth from "../img/earth.jpg";

import cofounderOne from "../img/co_founder_img_one.jpeg";
import cofounderTwo from "../img/co_founder_img_two.jpeg";
const { Content } = Layout;
const { Title } = Typography;
const { Paragraph } = Typography;

function Homepage() {
  return (
    <Layout
      style={{
        backgroundImage: "url(" + Earth + ")",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
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
              Web design, web publishing, web programming, and database
              management
            </Title>
          </div>
        </Content>
        <Content
          style={{
            padding: "0em 15em",
            marginTop: "4em",
          }}
        >
          <hr style={{ margin: "4em", borderTop: "0.2em solid green" }} />
          <Paragraph
            style={{
              fontSize: "1.2em",
              textAlign: "justify",
              lineHeight: "2.6em",
            }}
          >
            Company members share a common purpose and unite to achieve
            specific, declared goals. Companies take various forms, such as:
            voluntary associations, which may include nonprofit organizations,
            business entities, whose aim is generating profit, financial
            entities and banks, programs or educational institutions
          </Paragraph>
          <Paragraph
            style={{
              fontSize: "1.2em",
              textAlign: "justify",
              lineHeight: "2.6em",
            }}
          >
            Web development can range from developing a simple single static
            page of plain text to complex web applications, electronic
            businesses, and social network services. A more comprehensive list
            of tasks to which Web development commonly refers, may include Web
            engineering, Web design, Web content development, client liaison,
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
          <hr style={{ margin: "4em", borderTop: "0.2em solid green" }} />
        </Content>
        <div
          style={{
            background: "rgba(31, 102, 16, .3)",
            padding: "1em 0",
            margin: "10em 0 6em 0",
          }}
        >
          <Title
            style={{
              textAlign: "center",
              color: "white",
            }}
            level={2}
          >
            Co-founders
          </Title>
        </div>
        <Content
          style={{
            padding: "0em 10em",
            marginBottom: "10em",
          }}
        >
          <Row>
            <Col span={3} />
            <Col
              style={{
                backgroundColor: "white",

                borderRadius: "12px",
                border: "2px solid 	#D0D0D0",
              }}
              span={8}
            >
              {" "}
              <Image
                src={cofounderOne}
                style={{ width: "100%", borderRadius: "12px", margin: "0" }}
              />{" "}
              <Title
                style={{
                  textAlign: "center",
                  color: "#606060",
                }}
                level={4}
              >
                Nadiia Plaksii
              </Title>
              <div
                style={{
                  background: "rgba(31, 102, 16, .3)",

                }}
              >
                <hr
                  style={{
                    margin: "2em 0",
                  }}
                />
                <Title
                  style={{
                    textAlign: "center",
                    color: "white",
                  }}
                  level={4}
                >
                  Co-founder / Project Manager
                </Title>
                <hr
                  style={{
                    margin: "2em 0",
                  }}
                />
              </div>
              <Paragraph
                style={{
                  fontSize: "1em",
                  textAlign: "start",
                  lineHeight: "2em",
                  padding: "0.1em 0.1em 0.1em 1em",
            
                }}
              >
                Monitor Project Progress and Set Deadlines 
           
              </Paragraph>
              <hr />
              <Paragraph
                style={{
                  fontSize: "1em",
                  textAlign: "start",
                  lineHeight: "2em",
                  padding: "0.1em 0.1em 0.1em 1em",
            
                }}
              >
          
                Solve Issues That Arise 

              </Paragraph>
              <hr />
              <Paragraph
                style={{
                  fontSize: "1em",
                  textAlign: "start",
                  lineHeight: "2em",
                  padding: "0.1em 0.1em 0.1em 1em",
            
                }}
              >
             
                Evaluate Project Performance 
              </Paragraph>
            </Col>
            <Col span={2} />
            <Col
              style={{
                backgroundColor: "white",

                borderRadius: "12px",
                border: "2px solid 	#D0D0D0",
              }}
              span={8}
            >
              {" "}
              <Image
                src={cofounderTwo}
                style={{ width: "100%", borderRadius: "12px", margin: "0" }}
              />{" "}
              <Title
                style={{
                  textAlign: "center",
                   color: "#606060",
                }}
                level={4}
              >
                Vladislav Plaksy
              </Title>
              <div
                style={{
                  background: "rgba(31, 102, 16, .3)",
               
                }}
              >
                <hr
                  style={{
                    margin: "2em 0",
                  }}
                />
                <Title
                  style={{
                    textAlign: "center",
                    color: "white",
                  }}
                  level={4}
                >
                  Co-founder / Web Developer
                </Title>
                <hr
                  style={{
                    margin: "2em 0",
                  }}
                />
              </div>
              <Paragraph
                style={{
                  fontSize: "1em",
                  textAlign: "start",
                  lineHeight: "2em",
                  padding: "0.1em 0.1em 0.1em 1em",
                }}
              >
                Writing and reviewing code for sites
              </Paragraph>
              <hr />
              <Paragraph
                style={{
                  fontSize: "1em",
                  textAlign: "start",
                  lineHeight: "2em",
                  padding: "0.1em 0.1em 0.1em 1em",
                }}
              >
                Testing web applications
              </Paragraph>
              <hr />
              <Paragraph
                style={{
                  fontSize: "1em",
                  textAlign: "start",
                  lineHeight: "2em",
                  padding: "0.1em 0.1em 0.1em 1em",
                }}
              >
            Troubleshooting problems with performance or user experience
              </Paragraph>
   
            </Col>
          </Row>
        </Content>
      </div>
    </Layout>
  );
}

export default Homepage;
