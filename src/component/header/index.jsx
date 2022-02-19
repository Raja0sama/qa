import { MenuIcon, MoonIcon, Space } from "../";

import logo from "../../assets/logo.svg";

const iconsComponent = [
  (props) => (
    <div {...props}>
      <MenuIcon theme={props.theme} />
    </div>
  ),
  (props) => <span {...props}>MENU</span>,
  (props) => (
    <div onClick={props.toggleDark} {...props}>
      <MoonIcon theme={props.theme} />
    </div>
  ),
];

const _menu = ["News", "opinion", "Life", "Business", "magazine", "newsletter"];

function Header({ theme, toggleDark }) {
  return (
    <>
      <div className="header">
        <div className="w-full flex items-center ">
          {iconsComponent.map((Component, index) => {
            return (
              <Component
                key={`${index}-header-icon`}
                toggleDark={toggleDark}
                theme={theme}
                className="topHeaderIcons"
              />
            );
          })}
        </div>
        <div className="header-item">
          <img alt="basically no alt to display here." src={logo} />
        </div>
        <div className="header-item"></div>
      </div>
      <Space y={48} />
      <div className="menu">
        {_menu.map((item, index) => {
          return (
            <span key={`${item}`} className="menu-item">
              {item}
            </span>
          );
        })}
      </div>
      <Space y={30} />
      <div className="header-border" />
    </>
  );
}

export default Header;
