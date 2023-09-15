import { ConfigProvider } from "antd";
import ProjectsData from "../components/projects-components/ProjectsData";
import FirstProjectData from "../components/projects-components/FirstProjectData";

function Projects() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "rgba(0, 0, 0, .7)",
          colorPrimary: "#00b96b",
          colorSplit: "#00b96b",
        },
      }}
    >
      <>
        <FirstProjectData />
        <ProjectsData />
      </>
    </ConfigProvider>
  );
}

export default Projects;
