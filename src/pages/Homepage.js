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
      <>
        <HomeSlogan />
        <Space direction="vertical" size="large">
          <HomeInfoAbout />
          <CofoundersData />
        </Space>
      </>
    </Layout>
  );
}

export default Homepage;
