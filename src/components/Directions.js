import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import News from "../pages/News";
import ResultSuccess from "./sign-in-components/ResultSuccess";
import PersonalCabinet from "./sign-in-components/PersonalCabinet";

function Directions() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/welcome" element={<ResultSuccess />}></Route>
        <Route path="/cabinet" element={<PersonalCabinet />}></Route>
      </Routes>
    </div>
  );
}

export default Directions;
