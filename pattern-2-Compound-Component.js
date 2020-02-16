import React from "react";
import { NavBar } from "navbar";

/**
 * Without compound component
 */
export default function App({ isLoggedIn }) {
  return (
    <div className="navbar">
      <div className="navbar-item">Home</div>
      <div className="navbar-item">About</div>
      <div className="navbar-item">Portfolio</div>
      <div className="navbar-item">Contact</div>
      <div className="navbar-item">Blogs</div>
      {isLoggedIn && <div className="navbar-private-item">Admin</div>}
      {isLoggedIn && <div className="navbar-private-item">Blog Drafts</div>}
    </div>
  );
}

/**
 * With compound component
 */
export default function App({ isLoggedIn }) {
  return (
    <NavBar isLoggedIn={isLoggedIn}>
      <NavBar.Item>Home</NavBar.Item>
      <NavBar.Item>About</NavBar.Item>
      <NavBar.Item>Portfolio</NavBar.Item>
      <NavBar.Item>Contact</NavBar.Item>
      <NavBar.Item>Blogs</NavBar.Item>
      <NavBar.PrivateItem>Admin</NavBar.PrivateItem>
      <NavBar.PrivateItem>Blog Drafts</NavBar.PrivateItem>
    </NavBar>
  );
}
