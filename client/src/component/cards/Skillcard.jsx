import React from "react";
import "../../index.css";
import { Circle} from 'rc-progress';


export default function Skillcard({ name, percentage }) {
  return (
    
    <div className="w-48 h-[250px] pb-52 shadow-lg">
      <h1 className="pt-2 pb-2 pl-4" >{name} - {percentage}%</h1>
      
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
