import { ConfigProvider } from "antd";

function ConfigProviderAntd({ children }) {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorBgLayout: "rgba(245, 245, 245, .6)",
            colorPrimary: "#00b96b",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </>
  );
}
export default ConfigProviderAntd;
