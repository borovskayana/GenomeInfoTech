import items from "../data/Items.js";
import conditions from "../data/Conditions.js";
import socials from "../data/Socials.js";
import ConfigProviderFooter from "../utils/ConfigProviderFooter.js";
import fontSize from "../utils/FontSize.js";

import { Typography, Col, Row, Menu, Layout } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Footer } = Layout;

function FooterElement() {
  const navigate = useNavigate();

  return (
    <ConfigProviderFooter>
      <div>
        <Footer>
          <Row
            gutter={[
              { xs: 0, sm: 16, md: 0, lg: 32 },
              { xs: 16, sm: 16, md: 0, lg: 0 },
            ]}
          >
            <Col
              className="gutter-row"
              lg={{ span: 8 }}
              md={{ span: 5 }}
              xs={{ span: 24 }}
            >
              <div className="styles-footer">
                {" "}
                <Title level={2}>Genome InfoTech</Title>
              </div>
            </Col>
            <Col
              className="gutter-row"
              lg={{ span: 5 }}
              md={{ span: 6 }}
              xs={{ span: 24 }}
            >
              <div className="styles-footer">
                <Menu
                  mode="vertical"
                  items={items}
                  onClick={({ key }) => navigate(key)}
                  style={fontSize}
                />
              </div>
            </Col>
            <Col
              className="gutter-row"
              lg={{ span: 6 }}
              md={{ span: 7 }}
              xs={{ span: 24 }}
            >
              <div className="styles-footer">
                {" "}
                <Menu
                  mode="vertical"
                  items={conditions}
                  onClick={({ key }) => navigate(key)}
                  style={fontSize}
                />
              </div>
            </Col>
            <Col
              className="gutter-row"
              lg={{ span: 5 }}
              md={{ span: 6 }}
              xs={{ span: 24 }}
            >
              <div className="styles-footer">
                {" "}
                <Menu
                  mode="vertical"
                  items={socials}
                  onClick={({ key }) =>
                    (window.location.href = `https://www.${key}.com/`)
                  }
                  style={fontSize}
                />
              </div>
            </Col>
          </Row>
        </Footer>
      </div>
    </ConfigProviderFooter>
  );
}

export default FooterElement;
