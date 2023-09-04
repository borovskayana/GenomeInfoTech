import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import News from "../pages/News";
import SignUpModal from "./sign-in-components/SignUpModal";



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
