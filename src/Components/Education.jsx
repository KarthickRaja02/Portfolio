import React from "react";

const Education = () => {
  let educationDetails = [
    {
      line1: "Karpagam Institute of Technology, Coimbatore",
      line2: "B. E. Electronics and Communication Engineering (2020 - 2024)",
      line3: "CGPA : 8.14",
    },
    {
      line1: "Bhaarath Vidhya Bhavan Matric Higher Secondary School, Palani",
      line2: (
        <>
          HSC (12<sup>th</sup> Std.) : 81.5%
        </>
      ),
      line3: (
        <>
          SSLC (10<sup>th</sup> Std.) : 92%
        </>
      ),
    },
  ];

  return (
    <div className="education contentbox" id="education">
      <div className="title">
        <h1 data-aos="flip-right"> EDUCATION </h1>
        <div className="hline"></div>
      </div>
      <div className="details">
        <div className="edudetailbox" data-aos="flip-right">
          {educationDetails.map((ele, ind) => {
            return (
              <div className="rowanim" key={ind}>
                <div className="row" key={ind}>
                  <h3> {ele.line1} </h3>
                  <h4> {ele.line2} </h4>
                  <h4> {ele.line3} </h4>
                </div>
              </div>
            );
          })}
        </div>
        <div className="eduimgbox">
          <div className="imggif"></div>
        </div>
      </div>
    </div>
  );
};

export default Education;
