import "./style.css";
import SiteData from "../../model/siteData";
import ReactPlayer from "react-player";

const Project = ({ match }) => {
  const { id } = match.params;
  const projectData = SiteData.projects.find((p) => p.id === id);
  const { medias, descrpition, innerCover: cover } = projectData;

  const { min, floor } = Math;
  const videoWidth = floor(min(1280, window.innerWidth) * 0.7);
  const videoHeight = floor((videoWidth * 9) / 16);

  console.log(projectData);
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
    </div>
  );
};

export default Project;
