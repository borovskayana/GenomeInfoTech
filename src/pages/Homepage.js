import { Layout } from "antd";
import { Typography } from "antd";
import { Col, Row, Divider } from "antd";
import { Image } from "antd";

import Earth from "../img/earth.jpg";

import ReadMore from "../components/ReadMore";
import cofounderOne from "../img/co_founder_img_one.jpeg";
import cofounderTwo from "../img/co_founder_img_two.jpeg";
import { useState } from "react";
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
            marginTop: "4em"

          }}
        >
          <hr style={{ margin: "4em", borderTop: "0.2em solid rgba(31, 102, 16, .3)" }} />
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
          <hr style={{ margin: "4em", borderTop: "0.2em solid rgba(31, 102, 16, .3)" }} />
        </Content>
   
        <div
          style={{
            background: "rgba(31, 102, 16, .3)",
    
            margin: "10em 0 6em 0",
          }}
        >
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
        <Content
          style={{
            padding: "0em 8em",
            marginBottom: "20em",

         
          }}
        >



<div    style={{
                backgroundColor: "#FFFFFF",

                marginBottom: "6em",
       
            boxShadow: "0px 10px 10px 5px rgba(0, 0, 0, 0.4)",
            borderRadius: "12px",
                padding: "2em"
              }}>

          <Row gutter={16}>

            <Col
           
              span={8}
            >
              {" "}
              <Image
                src={cofounderOne}
                style={{ width: "100%", borderRadius: "50%", margin: "0",  padding: "3em"}}
                />{" "}
           
              </Col>
              <Col span={15}>
              <Title
                style={{
                  textAlign: "center",
                    color: "#606060",

                }}
                level={3}
              >
                Nadiia Plaksii
              </Title>
              <div
                style={{
                    background: "rgba(31, 102, 16, .2)",
            
    

                }}
              >
            
                <Title
                  style={{
                    textAlign: "center",
                      color: "white",
                      lineHeight: "3em",
                  }}
                  level={4}
                >
                  Co-founder / Project Manager
                </Title>
             
              </div>
              <Paragraph
                style={{
                  fontSize: "1em",
                  textAlign: "justify",
                  lineHeight: "2.5em",
                  padding: "0 1em",
            
                }}
                >
                  <ReadMore>
               Experienced in project management related to the sale or lease of state land to legal entities or individuals for the public, commercial, industrial, and other investment projects with over 16 years as an effective link between project developers, key stakeholders (authorities and state governments), and business partners (investors). Excellent reputation for resolving problems and improving key stakeholders' satisfaction. Great communication skills, listening skills. Team player and can find a common language with people from different backgrounds, authority, age, work, and life experiences. Strong business development professional graduated from The London School of Economics and Political Science (LSE).
               </ReadMore>
              </Paragraph>
             
              </Col>
        
          </Row>


          </div>


          <div    style={{
                backgroundColor: "#FFFFFF",

                marginBottom: "5em",
       
            boxShadow: "0px 10px 10px 5px rgba(0, 0, 0, 0.4)",
            borderRadius: "12px",
                padding: "2em"
              }}>

          <Row gutter={16}>

            <Col
           
              span={8}
            >
              {" "}
              <Image
                src={cofounderTwo}
                style={{ width: "100%", borderRadius: "50%", margin: "0",  padding: "3em"}}
                />{" "}
           
              </Col>
              <Col span={15}>
              <Title
                style={{
                  textAlign: "center",
                    color: "#606060",

                }}
                level={3}
              >
      Vladislav Plaksy
              </Title>
              <div
                style={{
                    background: "rgba(31, 102, 16, .2)",
            
    

                }}
              >
            
                <Title
                  style={{
                    textAlign: "center",
                      color: "white",
                      lineHeight: "3em",
                  }}
                  level={4}
                >
                                Co-founder / Web Developer
                </Title>
             
                </div>
        
              <Paragraph
                style={{
                  fontSize: "1em",
                  textAlign: "justify",
                  lineHeight: "2.5em",
                  padding: "0 1em",
            
                }}
                >
                          <ReadMore>
               With over 29 years of IT management, technology consulting, and development experience, I am a seasoned Delivery Manager at EPAM Systems, a leading global provider of digital platform engineering and software development services.

My mission is to design and build innovative solution components within the EPAM Fast-Data platform, focusing on accelerating the adoption of event streaming as a platform for data-driven enterprises. I leverage my expertise in microservices architecture, Java, Spring Boot, and Kafka APIs to deliver high-quality and scalable solutions that meet the needs and expectations of our clients.

I am also a co-founder and CEO of Genome InfoTech, a startup that provides cutting-edge data analytics and machine learning solutions for the healthcare industry. I lead a team of talented data scientists and engineers who use Scala, Spark, Hadoop, AWS, and GCP to create and deploy data pipelines, models, and applications that help improve health outcomes and reduce costs. 

I have a strong educational background in engineering, ecology, and land cadastre, as well as executive education from IESE Business School and MIT Sloan Executive Education. I hold several professional certifications, including Professional Scrum Master (PSM I, SPS), Google Cloud Certified Professional Data Engineer, Oracle Certified Associate, Java SE 7, and ITIL 4 Foundation. I am passionate about learning new technologies and skills, and I continuously seek opportunities to grow and challenge myself.
</ReadMore>

           
                  </Paragraph>
               
                
             
              </Col>
        
          </Row>


          </div>



        </Content>
    

        </div>

    </Layout>
  );
}

export default Homepage;
