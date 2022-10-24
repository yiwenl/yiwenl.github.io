import "./style.css";

const ProjContainer = ({ path, url, title, editions }) => {
  let text = `${title}`;
  if (editions) {
    text += ` (${editions}/${editions})`;
  }
  return (
    <div className="proj-container">
      <a href={`${url}`} target="_blank">
        <img src={`${process.env.PUBLIC_URL}/assets/generative/${path}`}></img>
      </a>
      <a href={`${url}`} target="_blank">
        <p>{title}</p>
      </a>
    </div>
  );
};

export default ProjContainer;
