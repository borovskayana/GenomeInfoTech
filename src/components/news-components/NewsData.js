import "../../css/projects-css/ProjectsData.css";
import newsInfo from "../../data/NewsInfo";
import NewsList from "./NewsList";

import { Breadcrumb, Button, Divider, ConfigProvider } from "antd";
import { useState } from "react";
import { Input, Row } from "antd";

import { useMediaQuery } from "react-responsive";

const { Search } = Input;

function NewsData() {
  const [inputType, setInputType] = useState("");
  let inputTypeHandlerOne = () => {
      setInputType("events");

  };
  let inputTypeHandlerTwo = () => {
    setInputType("article");
  };
  let inputTypeHandlerAll = () => {
    setInputType("");
  };


  const isLaptop = useMediaQuery({ maxWidth: 768 });
  const inputStyle = isLaptop
    ? { width: 320, padding: "1em" }
    : { width: 800, padding: "5em" };

  const [inputText, setInputText] = useState("");
  let inputHandler = (value) => {
    setInputText(value.toLowerCase());
  };
  const filteredData = newsInfo.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(inputText);
    }
  });
  const filteredTypeData = filteredData.filter((el) => {
    if (inputType === "events") {
      return el.type.includes("events");
    } else if (inputType === "article") {
      return el.type.includes("article");
    } else return el;
  });

  const listProjects = filteredTypeData.map((lists) => (
    <NewsList
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
      <ConfigProvider theme={{ token: { colorSplit: "#00b96b" } }}>
        <div style={{ textAlign: "end" }}>
          <Search
            placeholder="input search text"
            onSearch={inputHandler}
            style={inputStyle}
          />
        </div>
        <div className="projects-content">
                  <Breadcrumb
     
            items={[
              {
                title: (
                  <Button onClick={inputTypeHandlerAll}>
                    All
                  </Button>
                ),
              },

              {
                title: (
                  <Button onClick={inputTypeHandlerOne}>
                    Events
                  </Button>
                ),
              },
              {
                title: (
                  <Button onClick={inputTypeHandlerTwo} >
                    Articles
                  </Button>
                ),
              },
                      ]
                    }
          />
          <Divider />{" "}
          <Row justify="center" className="row-content" gutter={[16, 80]}>
            {listProjects}
          </Row>
        </div>
      </ConfigProvider>
    </>
  );
}
export default NewsData;
