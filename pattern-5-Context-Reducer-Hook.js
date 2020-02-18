import React, { createContext, useContext, useReducer } from "react";

export const NavBarContext = createContext();

/**
 * INTIAL STATE
 */
const initialState = {
  toggleNav: false,
  showPrivateLinks: false
};

/**
 * ACTIONS
 */
export const NAVBAR_ACTIONS = {
  TOGGLE_NAV: "TOGGLE_NAV",
  SHOW_PRIVATE_LINKS: "SHOW_PRIVATE_LINKS"
};

/**
 * REDUCERS
 */
const reducer = (state, action) => {
  switch (action.type) {
    case NAVBAR_ACTIONS.TOGGLE_NAV:
      return {
        ...state,
        toggleNav: action.toggleNav
      };

    case NAVBAR_ACTIONS.SHOW_PRIVATE_LINKS:
      return {
        ...state,
        showPrivateLinks: action.showPrivateLinks
      };

    default:
      return state;
  }
};

/**
 * PROVIDER
 */
export const NavBarProvider = ({ children }) => (
  <NavBarContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </NavBarContext.Provider>
);

export const useNavBarValue = () => useContext(NavBarContext);
