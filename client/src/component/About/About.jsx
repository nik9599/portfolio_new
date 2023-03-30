import "./about.css";
import im from "../../utils/background.jpg";
export default function About() {
  return (
    <div className="about">
      <div className="left">
        <h1>About ME</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          vitae tenetur vero impedit facilis repellendus iste incidunt eaque,
          veniam, praesentium, autem sed cum. Ad culpa quos ea possimus enim
          numquam. Veniam necessitatibus molestiae vel odit fuga. Exercitationem
          natus harum nisi doloremque, facere enim rerum ipsa adipisci earum,
          libero laborum optio corrupti modi voluptatem voluptate expedita.
          Incidunt in fugit minus esse?
        </p>
        <button className="btn">Download CV</button>
      </div>
      <div className="right">
        <img src={im}></img>
      </div>
    </div>
  );
}
