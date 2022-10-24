import "./style.css";
import logo from "../../logo.svg";

const Info = () => {
  return (
    <div className="info">
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="info-wrapper">
        <div className="main-description">
          <p>
            WENSDAY is the portfolio of Yi-Wen LIN — creative coder and
            generative artist from Taiwan. Based in London, UK.
            <br />
            <br />
            Working remotely with clients and partners worldwide.
          </p>
        </div>
        <div className="extra-description-container">
          <div className="extra-description">
            <p>
              After living in western culture for most of his life, he is still
              attached to the eastern culture and gets even more inspired by it
              now.
              <br />
              <br />
              Not only he plays with elements from easten cultures, his work is
              a cross-pollination of different cultures matured after years of
              living in foreign countries.
              <br />
              <br />
              Being a fast learner and particularly enjoying working in teams
              with different backgrounds, Wen is open to all kinds of different
              challenges.
            </p>
          </div>
          <div className="extra-links">
            <div className="links-block">
              <p className="links-title">Talks & Interviews</p>
              <a
                href="https://www.youtube.com/watch?v=Scfb9jHKLz4&ab_channel=GROWParis"
                target="_blank"
              >
                <p>Talk : Another Dimension - GROW 2018</p>
              </a>
              <a
                href="https://www.youtube.com/watch?v=qDOjA6AFTN8&ab_channel=BrunoImbrizi"
                target="_blank"
              >
                <p>Interview : Fxhash projects — with Yi-Wen Lin</p>
              </a>
              <a href="https://vimeo.com/177989061" target="_blank">
                <p>Talk : The Importance of R&D</p>
              </a>
            </div>
            <div className="links-block">
              <p className="links-title">Writings</p>
              <a
                href="https://yiwenl.substack.com/p/the-fire-within"
                target="_blank"
              >
                <p>The Fire Within : A study of ink</p>
              </a>
              <a href="https://yiwenl.substack.com/p/collage" target="_blank">
                <p>Collage : A fxCollab project</p>
              </a>
              <a href="https://yiwenl.substack.com/p/mountains" target="_blank">
                <p>Mountains : Github repository Visualisation</p>
              </a>
              <a
                href="https://medium.com/@yiwenl/codevember-breakdowns-part-1-shadow-mapping-f90d05179134"
                target="_blank"
              >
                <p>Codevember breakdowns Part 1 : Shadow Mapping</p>
              </a>
              <a
                href="https://medium.com/@yiwenl/codevember-breakdowns-part-2-depth-texture-to-world-position-68f237700945"
                target="_blank"
              >
                <p>
                  Codevember breakdowns Part 2 : Depth Texture to World
                  position.
                </p>
              </a>
            </div>
            <div className="links-block">
              <p className="links-title">More Links</p>
              <p>
                <a href="https://vimeo.com/yiwenlin" target="_blank">
                  Vimeo
                </a>{" "}
                //{" "}
                <a href="https://twitter.com/yiwen_lin" target="_blank">
                  Twitter
                </a>{" "}
                //{" "}
                <a href="https://www.instagram.com/yiwen/" target="_blank">
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
