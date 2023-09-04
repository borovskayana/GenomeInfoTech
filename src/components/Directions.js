import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import News from "../pages/News";
import SignUpModal from "./sign-in-components/SignUpModal";
import ResultSuccess from "./sign-in-components/ResultSuccess";
import PersonalCabinet from "./sign-in-components/PersonalCabinet";


function Directions() {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
    <div>
      <Routes location={previousLocation || location}>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/welcome" element={<ResultSuccess />}></Route>
        <Route path="/cabinet" element={<PersonalCabinet />}></Route>
      </Routes>
      {previousLocation && (
        <Routes>
          <Route path="/modal/sign-up" element={<SignUpModal />} />
      
        </Routes>
      )}
    </div>
  );
}

export default Directions;
