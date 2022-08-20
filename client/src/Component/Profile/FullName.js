import React from "react";
// import Typical from "react-typical";

export default function FullName() {
  return (
    <div>
      <span className="fullName">
        {""}
        Hello I'm <span className="High">Habib KSONTINI</span>
      </span>
      <p className="about">
        Mightiest in all parts of body and mind: in valour, in endurance, in
        beauty, in understanding, in skill, in strength and subtlety alike: of
        all the Children of Ilúvatar, and a bright flame was in him
      </p>
      <a href="Habib KSONTINI Resume.pdf" download="Habib KSONTINI Resume.pdf">
        {" "}
        <button className="btn">Get Resume</button>
      </a>
    </div>
  );
}
