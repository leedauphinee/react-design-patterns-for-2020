import React, { useContext, useState } from "react";

const NavBarContext = React.createContext();

function NavBar({ isLoggedIn, children }) {
  const [contextState] = useState({ isLoggedIn });
  return (
    <NavBarContext.Provider value={contextState}>
      <div className="navbar">{children}</div>
    </NavBarContext.Provider>
  );
}

NavBar.Item = ({ children }) => {
  return <div className="navbar-item">{children}</div>;
};

NavBar.PrivateItem = props => {
  const { isLoggedIn } = useContext(NavBarContext);
  return isLoggedIn && <div className="navbar-item" {...props} />;
};

export default NavBar;
