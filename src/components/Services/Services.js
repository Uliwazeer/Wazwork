import React from "react";
import "./Services.css";
import services from "./pictures/services.svg";
import ai from "./pictures/Icons/Ai.svg";
import backend from "./pictures/Icons/Backend.svg";
import dataAnalysis from "./pictures/Icons/dataAnalysis.svg";
import dataScience from "./pictures/Icons/dataScience.svg";
import uiUx from "./pictures/Icons/ui-ux.svg";
import graphicDesign from "./pictures/Icons/graphicDesign.svg";
import marketing from "./pictures/Icons/Marketing.svg";
import frontend from "./pictures/Icons/Frontend.svg";

const Service = ({ icon_container, title, content, color }) => {
  return (
    <div className="service">
      <div className="icon-container" style={{ backgroundColor: color }}>
        {icon_container}
      </div>
      <h3 className="title">{title}</h3>
      <div className="content">{content}</div>
    </div>
  );
};

const Head = () => {
  return (
    <div className="head">
      <div className="head-img">
        <img alt="" src={services} />
      </div>
      <div className="content">
        <h2>Our services</h2>
        <p>
          our service depends on what customers need from us. After giving a
          brief description of our services on the main page, customers can
          communicate to discuss the project to be implemented to reach the best
          solution and implementation immediately.
        </p>
      </div>
    </div>
  );
};

export const Main = () => {
  return (
    <div className="main">
      <h2>Design</h2>
      <div className="services-container">
        <Service
          color={"#9c19c9"}
          icon_container={<img alt="" src={uiUx} />}
          title={"UI/UX Design"}
          content={"From the initial design to the final development stage"}
        />
        <Service
          color={"#ffaf00"}
          icon_container={<img alt="" src={graphicDesign} />}
          title={"Graphic Design"}
          content={
            "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"
          }
        />
        <Service
          color={"#ff4e6e"}
          icon_container={<img alt="" src={marketing} />}
          title={"Marketing"}
          content={
            "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"
          }
        />
        <Service
          color={"#1975c9"}
          icon_container={<img alt="" src={dataAnalysis} />}
          title={"Data Analysis"}
          content={
            "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"
          }
        />
      </div>
      <h2>Programming</h2>
      <div className="services-container">
        <Service
          color={"#ffaf00"}
          icon_container={<img alt="" src={ai} />}
          title={"Artificial Inteligence"}
          content={
            "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"
          }
        />
        <Service
          color={"#ff4e6e"}
          icon_container={<img alt="" src={frontend} />}
          title={"Frontend Web Development"}
          content={
            "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"
          }
        />
        <Service
          color={"#1975c9"}
          icon_container={<img alt="" src={backend} />}
          title={"Backend Web Development"}
          content={
            "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"
          }
        />
        <Service
          color={"#9c19c9"}
          icon_container={<img alt="" src={dataScience} />}
          title={"Data Science"}
          content={
            "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"
          }
        />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <Head />
      <Main />
    </div>
  );
};

export default Services;
