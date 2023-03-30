import React from "react";
import "./skill.css";
import Skillcard from "../cards/Skillcard";
function Skill() {
  return (
    <div className="SKILL-CENTER">
      <div className="Heading">
        
        <h1>SKILL</h1>
        <p>
          Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
          vehicula enim, non aliquam risus.
        </p>
      </div>
      <div className="skill">
        <Skillcard name="Nodejs" percentage="75" />
        <Skillcard name="React js" percentage="90" />
        <Skillcard name="HTML" percentage="100" />
        <Skillcard name="CSS" percentage="90" />
        <Skillcard name="JS" percentage="90" />
        <Skillcard name="MONGO DB" percentage="85" />
      </div>
    </div>
  );
}

export default Skill;
