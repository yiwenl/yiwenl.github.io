import "./style.css";
import SiteData from "../../model/siteData";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
import Footer from "../../components/footer";

const Project = ({ match }) => {
  const { id } = match.params;
  const projectData = SiteData.projects.find((p) => p.id === id);
  const indexProj = SiteData.projects.indexOf(projectData);
  const nextIndex =
    indexProj === SiteData.projects.length - 1 ? 0 : indexProj + 1;
  const projectNext = SiteData.projects[nextIndex];
  console.log("Next project", projectNext);
  const { medias, descrpition, innerCover: cover } = projectData;

  const { min, floor } = Math;
  const videoWidth = floor(min(1280, window.innerWidth) * 0.7);
  const videoHeight = floor((videoWidth * 9) / 16);

  // console.log("Project Data", projectData);
  return (
    <div className="project">
      <div
        className="project-cover"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${cover})`,
        }}
      ></div>
      <div className="project-detail-wrapper">
        <div className="project-desc-wrapper">
          <p>{descrpition}</p>
        </div>
        <div className="project-media-wrapper">
          {medias.map(({ type, url }, i) => {
            if (type === "image") {
              return (
                <img
                  className="media-item"
                  key={`media-${i}`}
                  src={`${process.env.PUBLIC_URL}/assets/${url}`}
                ></img>
              );
            } else if (type === "vimeo") {
              return (
                <ReactPlayer
                  className="media-item"
                  key={`media-${i}`}
                  url={url}
                  controls={true}
                  width={`${videoWidth}px`}
                  height={`${videoHeight}px`}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="project-next-wrapper">
        <p className="project-next-project">
          next
          <br />
          project
        </p>
        <NavLink to={`/project/${projectNext.id}`}>
          <p className="project-next-profile-title">{projectNext.title}</p>
        </NavLink>
      </div>
      <Footer mini={true} />
    </div>
  );
};

export default Project;
