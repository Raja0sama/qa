import { Header } from "../";

function Layout({ children, dark, toggleDark }) {
  console.log({ toggleDark });

  const theme = dark ? "dark" : "light";
  return (
    <div className={`layout ${theme}`}>
      <div className="container">
        <Header toggleDark={toggleDark} theme={theme} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
