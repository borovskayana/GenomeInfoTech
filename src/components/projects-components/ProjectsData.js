import "../../css/projects-css/ProjectsData.css";
import projectsInfo from "../../data/ProjectsInfo";
import ProjectsHome from "./ProjectsHome";
import { useState } from "react";
import { Input } from "antd";

import { useMediaQuery } from "react-responsive";

const { Search } = Input;

function ProjectsData() {
  const isLaptop = useMediaQuery({ maxWidth: 768 });
  const inputStyle = isLaptop
    ? { width: 320, padding: "1em" }
    : { width: 800, padding: "5em" };

  const [inputText, setInputText] = useState("");
  let inputHandler = (value) => {
    setInputText(value.toLowerCase());
  };
  const filteredData = projectsInfo.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(inputText);
    }
  });

  const listProjects = filteredData.map((lists) => (
    <ProjectsHome
      key={lists.id}
      id={lists.id}
      img={lists.img}
      name={lists.name}
      stage={lists.stage}
      info={lists.info}
    />
  ));

  return (
    <>
      <div style={{ textAlign: "end" }}>
        <Search
          placeholder="input search text"
          onSearch={inputHandler}
          style={inputStyle}
        />
      </div>
      <div className="projects-content">{listProjects}</div>
    </>
  );
}
export default ProjectsData;
