import React from "react";
import "./skillcard.css";
import {Line , Circle} from 'rc-progress';


export default function Skillcard({ name, percentage }) {
  return (
    
    <div className="Skill">
      <h1>{name} - {percentage}%</h1>
      
      <div className="progressBar">
      <Circle
      percent={percentage}
      strokeWidth={4}
      trailWidth={4}
      strokeColor = "grey"
      gapDegree={20}
      gapPosition = 'top'  
      />
     </div>
    </div>
  );
}
