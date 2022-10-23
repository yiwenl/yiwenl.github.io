import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-container">
        <p>Projects</p>
        <p>Sketches</p>
        <p>Generative</p>
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
