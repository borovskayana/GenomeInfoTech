import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const items = [
    {
      label: "ABOUT US",
      key: "/",
    },
    {
      label: "PROJECTS",
      key: "/projects",
    },
    {
      label: "NEWS",
      key: "/news",
    },
    {
      label: "CONTACT US",
      key: "/contact",
    },
  ];
  return (
    <div>
      <Menu
        mode="horizontal"
        items={items}
        onClick={({ key }) => navigate(key)}
        style={{
          width: "50vw",
          background: "rgba(0, 0, 0, .0)",
          color: "white",
          alignItems: "end",
        }}
      />
    </div>
  );
}

export default Header;
