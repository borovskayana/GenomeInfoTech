import { ConfigProvider } from "antd";

function ConfigProviderFooter({ children }) {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorText: "#ffffff",
            colorBgContainer: "#202020",
            colorBgLayout: "#202020",
            colorBgElevated: "rgba(0, 0, 0, .0)",
            lineWidth: "0",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </>
  );
}
export default ConfigProviderFooter;
