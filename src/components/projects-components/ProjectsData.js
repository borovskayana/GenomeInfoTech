import projectsInfo from "../../data/ProjectsInfo";
import ProjectsHome from "./ProjectsHome";

function ProjectsData() {
  const listProjects = projectsInfo.map((lists, index) => (
    <ProjectsHome
      key={index}
      img={lists.img}
      name={lists.name}
      stage={lists.stage}
    />
  ));

  return <div style={{ padding: "10em" }}>{listProjects} </div>;
}
export default ProjectsData;
