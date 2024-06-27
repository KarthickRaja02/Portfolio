import React from "react";
import Button from "./Button";

const About = ({ leftHide, setLeftHide }) => {
  return (
    <div className="about contentbox" id="about">
      <div className="window">
        <div className="col1">
          <div
            data-aos="fade-right"
            className="imgboxlayer"
            style={{
              transition: "all 1s",
              height: `${leftHide ? "120%" : "100%"}`,
            }}
          >
            <div className="imgbox"></div>
          </div>
        </div>
        <div className="col2" data-aos="fade-left">
          <h2 data-aos="fade-left">
            KARTHICK RAJA P<div className="hline"></div>
          </h2>
          <h3 id="role">SOFTWARE DEVELOPER</h3>
          <div className="description">
            Dynamic and versatile software developer with proficiency in HTML,
            CSS, Tailwind CSS, JavaScript, React JS, Node JS, Java, Mongo DB and MySQL. Possessing a
            solid foundation in computer science principles and programming
            languages, I am an adept at developing and implementing efficient
            solutions to complex problems.
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default About;
