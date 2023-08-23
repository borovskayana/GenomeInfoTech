import "../../css/home-css/CoFounders.css";

import cofoundersInfo from "../../data/CofoundersInfo";
import HomeCoFounders from "./HomeCoFounders";
import CofoundersTitle from "./CoFoundersTitle";

import { Row, Space } from "antd";


function CofoundersData() {
  const listItems = cofoundersInfo.map((info, index) => (
    <HomeCoFounders
      key={index}
      img={info.img}
      name={info.name}
      stage={info.stage}
      link={info.link}
    />
  ));

  return (
    <div className="content-cofounders">
      <Space direction="vertical" size={48}>
        <CofoundersTitle />
        <Row justify="center">
          {listItems}
        </Row>
      </Space>
    </div>
  );
}
export default CofoundersData;
