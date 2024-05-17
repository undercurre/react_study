import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "animations",
    label: "Animations",
    icon: <MailOutlined />,
    children: [
      {
        key: "/cssAnimation",
        label: "CssAnimation",
      },
      {
        key: "/rafAnimation",
        label: "RafAnimation",
      },
      {
        key: "/transitionGroup",
        label: "TransitionGroup",
      },
    ],
  },
  {
    key: "components",
    label: "Components",
    icon: <AppstoreOutlined />,
    children: [
      { key: "/classComponent", label: "ClassComponent" },
      { key: "/functionComponent", label: "FunctionComponent" },
    ],
  },
  {
    key: "extras",
    label: "Extras",
    icon: <SettingOutlined />,
    children: [
      { key: "/animated", label: "Animated" },
      { key: "/antDesign", label: "AntDesign" },
    ],
  },
  {
    key: "tools",
    label: "Tools",
    children: [
      { key: "/storeCounter", label: "StoreCounter" },
      { key: "/webTools", label: "WebTools" },
    ],
  },
  { key: "/conditionRender", label: "ConditionRender" },
  { key: "/cycleRender", label: "CycleRender" },
  { key: "/dataControler", label: "DataControler" },
  { key: "/eventHandler", label: "EventHandler" },
];

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    navigate(e.key);
  };

  return (
    <div style={{ width: "40%" }}>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["animations", "components", "extras", "tools"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default NavBar;
