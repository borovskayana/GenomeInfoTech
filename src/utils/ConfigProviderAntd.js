import { ConfigProvider } from "antd";

function ConfigProviderAntd({ children }) {
  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
        {children}
      </ConfigProvider>
    </>
  );
}
export default ConfigProviderAntd;
