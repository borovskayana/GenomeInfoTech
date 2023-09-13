import "../../css/Main.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Result, Layout } from "antd";
const { Content } = Layout;
const ResultSuccess = () => {
  const navigate = useNavigate();
  const personalCabinet = () => {
    navigate("/cabinet");
  };

  return (
    <Content className="content">
      <Result
        status="success"
        title="Welcome"
        subTitle="Your request has been successfully sent! You can review reservation details in the personal account."
        extra={[
          <Button type="primary" key="console" onClick={personalCabinet}>
            Go to Personal cabinet
          </Button>,
        ]}
      />
    </Content>
  );
};
export default ResultSuccess;
