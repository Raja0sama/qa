import Header from "../header";

function Layout({ children, dark }) {
  const theme = dark ? "dark" : "light";
  return (
    <div className={`layout ${theme}`}>
      <div className="container">
        <Header theme={theme} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
