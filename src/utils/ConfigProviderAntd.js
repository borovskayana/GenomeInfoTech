import { ConfigProvider } from "antd";

function ConfigProviderAntd({ children }) {
  return (
    <>
      <ConfigProvider theme={{ token: { colorBgLayout: "rgba(245, 245, 245, .6)" } }}>
        {children}
      </ConfigProvider>
    </>
  );
}
export default ConfigProviderAntd;
