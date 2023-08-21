import { Layout, Space } from "antd";

import Earth from "../img/earth.jpg";

import HomeSlogan from "../components/home-components/HomeSlogan";
import HomeInfoAbout from "../components/home-components/HomeInfoAbout";
import CofoundersData from "../components/home-components/CofoundersData";

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
        <Space direction="vertical" size="large">
          <HomeSlogan />
          <HomeInfoAbout />
          <CofoundersData />
        </Space>
      </div>
    </Layout>
  );
}

export default Homepage;
