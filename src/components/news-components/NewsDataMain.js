import "../../css/news-css/News.css";
import newsInfoMain from "../../data/NewsInfoMain";
import NewsListMain from "./NewsListMain";

import { Row } from "antd";

import { useMediaQuery } from "react-responsive";

function NewsDataMain() {
  const isLaptop = useMediaQuery({ maxWidth: 768 });

  const listProjects = newsInfoMain.map((lists) => (
    <NewsListMain
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
      <div className="news-main-content">
        {" "}
        <Row justify="center" className="row-content" gutter={[16, 24]}>
          {listProjects}
        </Row>
      </div>
    </>
  );
}
export default NewsDataMain;
