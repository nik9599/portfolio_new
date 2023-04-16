import React from "react";
import "../../index.css";
import Skillcard from "../cards/Skillcard";
function Skill() {
  return (
    <div className="SKILL-CENTER">
      <div className="Heading">
        
        <h1 className="lg:text-4xl lg:font-semibold lg:pl-28 pb-7 " >SKILL</h1>
        <p className="lg:pl-28 pb-10 " >
          Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
          vehicula enim, non aliquam risus.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-flow-roww gap-2 lg:ml-32">
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
