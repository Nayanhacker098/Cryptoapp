import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Menu, Avatar } from "antd";
import {
  HomeOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Logo from "../images/logo.png";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const active = () => {
    setOpenNav(!openNav);
  };
  // <MenuOutlined />, <CloseOutlined />
  return (
    <div className="navbar" onClick={active}>
      <div className="nav-icons">
        {openNav ? <CloseOutlined /> : <MenuOutlined />}
      </div>
      <div className={`nav-container ${openNav && "active-nav"}`}>
        <div className="logo-container">
          <Avatar src={Logo} size="large" />
          <Typography.Title level={2}>
            <Link to="/">CRYPTOAPP</Link>
          </Typography.Title>
        </div>
        <Menu className="nav-list">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
