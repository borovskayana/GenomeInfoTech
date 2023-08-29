import "../../css/projects-css/ProjectsData.css";
import projectsInfo from "../../data/ProjectsInfo";
import FirstProject from "./FirstProject";
import { Typography, Divider, ConfigProvider } from "antd";
import { Carousel } from 'antd';
const { Title } = Typography;


function FirstProjectData() {
  const sliceProjects = projectsInfo.slice(0, 3);
  const mainProjects = sliceProjects.map((lists, index) => (
    <FirstProject
      key={index}
      img={lists.img}
      name={lists.name}
      stage={lists.stage}
      info={lists.info}
    />
  ));

  return (
    <ConfigProvider theme={{ token: { colorBgContainer: "rgba(0, 0, 0, .6)" } }}>
    <div>

        <Carousel autoplay style={{ paddingBottom: '5em'}}> {mainProjects} </Carousel>
        <div className="first-project">
          <Divider plain>
            <Title level={3}>Projects</Title>
          </Divider>
        </div>

      </div>
      </ConfigProvider>
  );
}
export default FirstProjectData;
