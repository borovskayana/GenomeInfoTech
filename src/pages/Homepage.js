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

        <HomeSlogan />
        <Space direction="vertical" size="large">
          <HomeInfoAbout />
          <CofoundersData />
        </Space>
      </div>
    </Layout>
  );
}

export default Homepage;
