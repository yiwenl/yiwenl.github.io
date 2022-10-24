import "./style.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  let activeStyle = {
    opacity: 0.2,
  };

  return (
    <div className="footer">
      <div className="main-container">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <a href="https://yiwenl.github.io/Sketches" target="_blank">
          <p>Sketches</p>
        </a>
        <NavLink
          to="generative"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <p className="last-child">Generative</p>
        </NavLink>
      </div>
      <div className="link-container">
        <div className="social-container">
          <a href="https://instagram.com/yiwen" target="_blank">
            <p>instagram</p>
          </a>
          <a href="https://twitter.com/yiwen_lin" target="_blank">
            <p>twitter</p>
          </a>
        </div>
        <div className="email-container">
          <a href="mailto:bongiovi015@gmail.com">
            <p>say hi</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
