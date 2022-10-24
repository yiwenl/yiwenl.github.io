import "./style.css";
import SiteData from "../../model/siteData";
import ReactPlayer from "react-player";

const Project = ({ match }) => {
  const { id } = match.params;
  const projectData = SiteData.projects.find((p) => p.id === id);
  const { cover, medias } = projectData;

  console.log(projectData);
  return (
    <div className="project">
      <img src={`${process.env.PUBLIC_URL}/assets/${cover}`}></img>
      <div className="project-detial-wrapper">
        <div className="project-desc-wrapper"></div>
        <div className="project-media-wrapper">
          {medias.map(({ type, url }, i) => {
            if (type === "image") {
              return (
                <img
                  key={`media-${i}`}
                  src={`${process.env.PUBLIC_URL}/assets/${url}`}
                ></img>
              );
            } else if (type === "vimeo") {
              return (
                <ReactPlayer key={`media-${i}`} url={url} controls="true" />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
