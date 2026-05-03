import Meta from "../components/Meta";
import Header from "../components/Header";

import styles from "../styles/404.module.css";

const Custom404 = () => {
  return (
    <>
      <Meta title={"Wensday | Not Found"} />
      <Header />
      <div className={styles.container}>
        <h1>Error 404</h1>
      </div>
    </>
  );
};

export default Custom404;
