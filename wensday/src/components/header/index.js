import "./style.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    opacity: 0.2,
  };

  return (
    <div className="header">
      <div className="container-left">
        <p>
          WENSDAY.co
          <br />/ YI-WEN LIN
        </p>
        <p>CREATIVE CODER</p>
      </div>
      <div className="container-right">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <p>Projects</p>
        </NavLink>
        <p>&nbsp;//&nbsp;</p>
        <a href="https://yiwenl.github.io/Sketches" target="_blank">
          <p>Sketches</p>
        </a>
        <p>&nbsp;//&nbsp;</p>
        <NavLink
          to="generative"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <p>Generative</p>
        </NavLink>
        <p>&nbsp;//&nbsp;</p>
        <p>info</p>
      </div>
    </div>
  );
};

export default Header;
