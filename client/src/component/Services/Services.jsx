import React from "react";
import "./services.css";
import Card from "../cards/Cards";
import Web from "../../utils/web-d.jpg";
function Services() {
  return (
    <div className="services-s">
      <div className="data">
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor sit i eveniet non blanditiis saepe obcaecati, ipsa
          quod tempore ratione quas aliquid et officia doloribus maxime iure
          mollitia ut dolor deserunt enim?
        </p>
      </div>
      <div className="service">
      <div className="card-1">
        <Card
          img={Web}
          heading="Web-Development"
          intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        </div>
         <div className="card-2">
        <Card
          img={Web}
          heading="Software Dev"
          intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        </div>
         <div className="card-3">
        <Card
          img={Web}
          heading="SEO"
          intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        </div>
         <div className="card-4">
        <Card
          img={Web}
          heading="API Dev"
          intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        /></div>
        <div className="card-5">
        <Card
          img={Web}
          heading="UI/UX"
          intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
       </div>
      </div>
    </div>
  );
}

export default Services;
