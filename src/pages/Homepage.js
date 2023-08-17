import { Layout } from "antd";

import "../css/Homepage.css";
import Earth from "../img/earth.jpg";

import HomeSlogan from "../components/HomeSlogan";
import HomeInfoAbout from "../components/HomeInfoAbout";
import HomeCoFounders from "../components/HomeCoFounders";

function Homepage() {
  return (
    <Layout
      style={{
        backgroundImage: "url(" + Earth + ")",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <HomeSlogan />
        <HomeInfoAbout />
        <HomeCoFounders />
      </div>
    </Layout>
  );
}

export default Homepage;
