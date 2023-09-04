import "../../css/Main.css";
import React from 'react';
import { Button, Result, Layout } from 'antd';
const { Content } = Layout;
const ResultSuccess = () => (
  <Content className="content">
  <Result
    status="success"
    title="Welcome"
    subTitle="Your request has been successfully sent! You can review reservation details in the personal account."
    extra={[
      <Button type="primary" key="console">
        Go to Personal cabinet
      </Button>

    ]}
    />
    </Content>
);
export default ResultSuccess;