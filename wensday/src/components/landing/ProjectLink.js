import "./style.css";

const ProjectLink = ({ cover, title, subtitle }) => {
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
      <img src={`${process.env.PUBLIC_URL}/assets/${cover}`}></img>
    </div>
  );
};

export default ProjectLink;
