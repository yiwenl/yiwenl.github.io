import "./style.css";
import ProjContainer from "./projContainer";
import siteData from "../../model/siteData";
import Footer from "../../components/footer";

const Generative = () => {
  const {
    generatives: {
      fireWithin,
      collage,
      sketching,
      wondering,
      percentage,
      strand,
      labyrinth,
      hex,
      maze,
      rubixCube,
      circles,
      threads,
      excursion,
    },
  } = siteData;
  return (
    <div className="generative">
      <div className="title-container">
        <p>
          Generative Art
          <br />
          Collections
        </p>
      </div>
      <div className="generative-container">
        <div className="column-container">
          <div className="row-container">
            <div className="big-container">
              <ProjContainer {...fireWithin} />
            </div>
          </div>
          <div className="row-container">
            <div className="small-container">
              <ProjContainer {...collage} />
            </div>
            <div className="small-container">
              <ProjContainer {...sketching} />
            </div>
            <div className="small-container">
              <ProjContainer {...wondering} />
            </div>
            <div className="small-container">
              <ProjContainer {...percentage} />
            </div>
          </div>
        </div>

        <div className="column-container">
          <div className="row-container">
            <div className="small-container">
              <ProjContainer {...strand} />
            </div>
            <div className="small-container">
              <ProjContainer {...labyrinth} />
            </div>
            <div className="big-container">
              <ProjContainer {...maze} />
            </div>
          </div>
          <div className="row-container">
            <div className="big-container">
              <ProjContainer {...hex} />
            </div>
            <div className="small-container">
              <ProjContainer {...rubixCube} />
            </div>
            <div className="small-container">
              <ProjContainer {...excursion} />
            </div>
          </div>
        </div>

        <div className="column-container">
          <div className="row-container">
            <div className="big-container">
              <ProjContainer {...threads} />
            </div>
          </div>
          <div className="row-container">
            <div className="big-container">
              <ProjContainer {...circles} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Generative;
