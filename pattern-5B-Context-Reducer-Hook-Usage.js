import React from "react";
import "./styles.css";
import {
  NavBarProvider,
  useNavBarValue,
  NAVBAR_ACTIONS
} from "./pattern-6-Context-Reducer-Hook";

export default function App() {
  return (
    <div className="App">
      <NavBarProvider>
        <NavBarComponent />
      </NavBarProvider>
    </div>
  );
}

const NavBarComponent = () => {
  const { state, dispatch } = useNavBarValue();

  const handleShowNav = () => {
    dispatch({
      type: NAVBAR_ACTIONS.TOGGLE_NAV,
      toggleNav: true
    });
  };

  return (
    <div>
      {state.toggleNav && <Navigation />}
      <button onClick={handleShowNav}>Show Nav</button>
    </div>
  );
};
