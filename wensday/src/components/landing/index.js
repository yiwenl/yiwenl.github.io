import "./style.css";
import siteData from "../../model/siteData";
import ProjectLink from "./ProjectLink";
import WebGL from "../webgl";

const Landing = () => {
  const { projects } = siteData;

  return (
    <div className="landing">
      <div className="Landing-wrapper">
        {/* <WebGL /> */}
        <div className="landing-title-container">
          <p>
            WENSDAY is the portfolio of Yi-Wen LIN — creative coder and
            generative artist from Taiwan. Based in London, UK. Working remotely
            with clients and partners worldwide.
          </p>
        </div>
      </div>
      <div className="projects-container">
        {projects.map((project) => {
          return <ProjectLink key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Landing;
