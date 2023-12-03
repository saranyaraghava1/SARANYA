// components/NavBar.js
/*import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
*/
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <LoginPage />
        <SignUp />
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
