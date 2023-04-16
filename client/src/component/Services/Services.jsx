import React from "react";
import "../../index.css";
import Card from "../cards/Cards";
import Web from "../../utils/web-d.jpg";
function Services() {
  return (
    <div className="flex flex-col items-center justify-center mt-16  pb-14">
      <div className="">
        <h1 className="lg:text-3xl md:text-2xl pb-5 " >Services</h1>
        <p>
          Lorem ipsum dolor sit i eveniet non blanditiis saepe obcaecati, ipsa
          quod tempore ratione quas aliquid et officia doloribus maxime iure
          mollitia ut dolor deserunt enim?
        </p>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-flow-roww gap-2 ">
        <div className="">
          <Card
            img={Web}
            heading="Web-Development"
            intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div className="">
          <Card
            img={Web}
            heading="Software Dev"
            intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div className="">
          <Card
            img={Web}
            heading="SEO"
            intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div className="">
          <Card
            img={Web}
            heading="API Dev"
            intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div className="">
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
