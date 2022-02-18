import { MenuIcon, MoonIcon } from "../svgIcon";

import Space from "../space";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import moon from "../../assets/moon.svg";

const iconsComponent = [
  (props) => (
    <div {...props}>
      <MenuIcon theme={props.theme} />
    </div>
  ),
  (props) => <span {...props}>MENU</span>,
  (props) => (
    <div {...props}>
      <MoonIcon theme={props.theme} />
    </div>
  ),
];

const _menu = ["News", "opinion", "Life", "Business", "magazine", "newsletter"];

function Header({ theme }) {
  return (
    <>
      <div className="header">
        <div className="w-full flex items-center ">
          {iconsComponent.map((Component, index) => {
            return <Component theme={theme} className="topHeaderIcons" />;
          })}
        </div>
        <div className="header-item">
          <img src={logo} />
        </div>
        <div className="header-item"></div>
      </div>
      <Space y={48} />
      <div className="menu">
        {_menu.map((item, index) => {
          return <span className="menu-item"> {item} </span>;
        })}
      </div>
      <Space y={30} />
      <div className="header-border" />
    </>
  );
}

export default Header;
