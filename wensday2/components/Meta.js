import Head from "next/Head";

const Meta = ({ title }) => {
  const _title = title === undefined ? `Yi-Wen | Creative Coder` : title;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Yi-Wen Lin | Creative Coder" />
        <meta property="og:url" content="https://yiwenl.github.io/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Freelance Createive Coder based in UK"
        />
        <meta property="og:image" content="https://wensday.co/wensdayBig.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="Yi-Wen Lin" />
        <meta name="twitter:url" content="http://yiwenl.github.io/Sketches/" />
        <meta name="twitter:title" content="Yi-Wen Lin | Creative Coder" />
        <meta
          name="twitter:description"
          content="Freelance Createive Coder based in UK"
        />
        <meta
          name="twitter:image"
          content="https://wensday.co/wensdayBig.jpg"
        />
        <title>{_title}</title>
      </Head>
    </>
  );
};

export default Meta;
