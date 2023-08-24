import "../../css/projects-css/ProjectsData.css";
import mainProjectInfo from "../../data/MainProject";
import FirstProject from "./FirstProject";
import { Typography, Divider, Space } from "antd";
const { Title } = Typography;

function FirstProjectData() {
  const mainProjects = mainProjectInfo.map((lists, index) => (
    <FirstProject
      key={index}
      img={lists.img}
      name={lists.name}
      stage={lists.stage}
      info={lists.info}
    />
  ));

  return (
    <div>
      <Space direction="vertical" size="large">
        <div> {mainProjects} </div>
        <div className="first-project">
          <Divider plain>
            <Title level={3}>Projects</Title>
          </Divider>
        </div>
      </Space>
    </div>
  );
}
export default FirstProjectData;
