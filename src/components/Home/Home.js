import React from "react";
import "./Home.css";
import { Main } from "../Services/Services";
import HomePage from "./imgs/SVG/Home Page.png";
import WhoLogo from "./imgs/SVG/Who we are.png";
import wedesign from "./imgs/SVG/we design and build.png";
import whywazwork from "./imgs/SVG/Why Wazwork.png";

const Head = () => {
  return (
    <section className="head-right">
      <div className="head">
        <div className="head-img">
          <img alt="" src={HomePage} />
        </div>
        <div className="content">
          <h2>
            Discover your perfect service and the prices that suit your
            business.
          </h2>
          <p>
            Behind our Golden Arches is a global team,
            designers,programmers,........etc and numbers of there projects
            others who make up who we are as a brand. It’s the entire Wazwork
            team that makes your business more perfect. Across our business we
            strive to lift up the service for our clients.
          </p>
          <div className="text-center">
            <button className="contact-btn">Contact us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoAreWe = () => {
  return (
    <section className="head-left">
      <div className="head">
        <div className="head-img">
          <img alt="" src={WhoLogo} />
        </div>
        <div className="content">
          <h2>who we are ?</h2>
          <p>
            Every business needs from us an integrated coverage in order to
            achieve the goal of our clients. Where better customer service is
            our goals.
          </p>
          <div className="text-center">
            <button className="contact-btn">Contact us</button>
          </div>
        </div>
      </div>

      {/* <div>
        <img alt="" className="" src={WhoLogo} />
      </div>
      <div>
        <h2 className="w-50 m-auto">who we are ?</h2>
        <p className="w-50 m-auto lh-lg my-4">
          Behind our Golden Arches is a global team,
          designers,programmers,........etc and numbers of there projects others
          who make up who we are as a brand. It’s the entire Wazwork team that
          makes your business more perfect. Across our business we strive to
          lift up the service for our clients.
        </p>
  </div>*/}
    </section>
  );
};

const WeDesign = () => {
  return (
    <section className="head-right">
      <div className="head">
        <div className="head-img">
          <img alt="" src={wedesign} />
        </div>
        <div className="content">
          <h2>
            we design and build innovative solutions for our trusted partenars
          </h2>
          <p>
            Wazwork provides specialized and responsive technical consulting
            services for companies and agencies of all sizes. It also has teams
            that contain professional designers and programmers to do business
            such as web, design, advertising, application programming, data
            analysis, artificial intelligence....etc. And you can browse many
            projects on wazwork.
          </p>
          <div className="text-center">
            <button className="contact-btn">Contact us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyWazwork = () => {
  return (
    <section className="head-left">
      <div className="head">
        <div className="head-img">
          <img alt="" src={whywazwork} />
        </div>
        <div className="content">
          <h2>Why WAZWORK ?</h2>
          <p>
            wazwork has a lot of services that owners of simple, small, medium
            and large companies need. It also does not need very high prices
            because our goal is to serve the customer to the fullest. For the
            service, wazwork will be with you step by step until completing your
            tasks in a very short time.
          </p>
          <div className="text-center">
            <button className="contact-btn">Contact us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Head />
      <WhoAreWe />
      <Main />
      <WeDesign />
      <WhyWazwork />
    </div>
  );
};

export default Home;
