import "./style.css";
import { NavLink } from "react-router-dom";

const ProjectLink = ({ id, innerCover, title, subtitle }) => {
  return (
    <div className="project-wrapper">
      <div className="project-details">
        <p>
          FEATURED
          <br />
          PROJECTS
        </p>
        <p className="project-name">{title}</p>
        <p>{subtitle}</p>
      </div>
      <NavLink to={`/project/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/assets/${innerCover}`}></img>
      </NavLink>
    </div>
  );
};

export default ProjectLink;
