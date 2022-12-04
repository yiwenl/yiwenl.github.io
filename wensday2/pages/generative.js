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
            <GenerativeItem project={generatives.fireWithin} />
            <GenerativeItem small={true} project={generatives.strand} />
            <GenerativeItem small={true} project={generatives.labyrinth} />
            <GenerativeItem project={generatives.maze} />
            <GenerativeItem project={generatives.threads} />
          </div>
          <div className={styles.column}>
            <GenerativeItem small={true} project={generatives.collage} />
            <GenerativeItem small={true} project={generatives.sketching} />
            <GenerativeItem small={true} project={generatives.wondering} />
            <GenerativeItem small={true} project={generatives.percentage} />
            <GenerativeItem project={generatives.hex} />
            <GenerativeItem small={true} project={generatives.rubixCube} />
            <GenerativeItem small={true} project={generatives.excursion} />
            <GenerativeItem project={generatives.circles} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Generative;
