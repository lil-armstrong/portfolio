import "./index.scss";
import MePng from "../static/image/me.png";

interface PropInterface {
  mainTitle: JSX.Element | string;
  subTitle: JSX.Element | string;
  contact_links: Array<JSX.Element | string>
};

export default function Hero({
  mainTitle = <></>,
  subTitle = <></>,
  contact_links = [],
}:PropInterface) {
  return (
    <div id="page_hero">
      <figure className="me_passport">
        <img src={MePng} alt="my passport" />
      </figure>
      <div className="hero_content">
        <header
          className="text-center"
          style={{
            display: "flex",
            margin: "0 auto",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "30vh",
          }}
        >
          <h1 className="hero-title ">
            <div className="before-title"></div>
            {mainTitle}
            <div className="after-title"></div>
          </h1>
          <div className="subtitle">{subTitle}</div>
        </header>

        <div className="mt-[60px] p-[4px]">
          <ul className="list list-row gap-[30px]">
            {contact_links.map((content, idx) => (
              <li key={idx} className="list-item social_icon">
                {content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
