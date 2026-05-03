// Styles
import styles from "../styles/Generative.module.css";

// Model
import SiteData from "../model/data";

import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GenerativeItem from "../components/GenerativeItem";

const Generative = () => {
  const { generatives } = SiteData;
  return (
    <>
      <Meta title={"Wensday | Generative"} />
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>
          Generative Art
          <br />
          Collections
        </h1>
        <div className={styles.wrapper}>
          <div className={styles.column}>
            <GenerativeItem index={0} project={generatives.fireWithin} />
            <GenerativeItem index={1} small={true} project={generatives.strand} />
            <GenerativeItem index={2} small={true} project={generatives.labyrinth} />
            <GenerativeItem index={3} project={generatives.maze} />
            <GenerativeItem index={4} project={generatives.threads} />
          </div>
          <div className={styles.column}>
            <GenerativeItem index={5} small={true} project={generatives.collage} />
            <GenerativeItem index={6} small={true} project={generatives.sketching} />
            <GenerativeItem index={7} small={true} project={generatives.wondering} />
            <GenerativeItem index={8} small={true} project={generatives.percentage} />
            <GenerativeItem index={9} project={generatives.hex} />
            <GenerativeItem index={10} small={true} project={generatives.rubixCube} />
            <GenerativeItem index={11} small={true} project={generatives.excursion} />
            <GenerativeItem index={11} project={generatives.circles} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Generative;
