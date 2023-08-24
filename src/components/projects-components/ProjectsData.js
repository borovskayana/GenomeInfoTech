import "../../css/projects-css/ProjectsData.css";
import projectsInfo from "../../data/ProjectsInfo";
import ProjectsHome from "./ProjectsHome";

function ProjectsData() {
  const listProjects = projectsInfo.map((lists, index) => (
    <ProjectsHome
      key={index}
      img={lists.img}
      name={lists.name}
      stage={lists.stage}
      info={lists.info}
    />
  ));

  return <div className="projects-content">{listProjects}</div>;
}
export default ProjectsData;
