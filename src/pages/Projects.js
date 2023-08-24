import { Image, Typography, Layout } from "antd";
import projects from "../img/projects.png"
import ProjectsData from "../components/projects-components/ProjectsData";

const { Title, Text } = Typography;
const { Content } = Layout;

function Projects() {
    return (
        <>
            <Content style={{textAlign: "center"}}>
            <Title level={2}>Name of the project</Title>
            <Text>Brief info about project</Text>
            <Image src={projects} style={{ width: "50%" }} />
            </Content>
            <div style={{textAlign: "center"}}>
                <Title level={3}>Projects</Title>
                <hr/>
            </div>
            <ProjectsData/>

        </>
    )
}

export default Projects
