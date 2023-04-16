import "../../index.css";
import im from "../../utils/self-image.jpg";
export default function About() {
  return (
    <div className="bg-gray-100 pt-6 h-96">
      <div className=" pt-2 md:flex md:justify-center md:items-center md:flex-col lg:flex-row">
        <h1 className="text-3xl lg:mr-14 lg:text-4xl md:mb-10">About ME</h1>
        <p className="md:text-sm md:w-[700px] justify-evenly ">
          Welcome to Nikhil's portfolio! Nikhil is a third-year B.Tech student
          pursuing Computer Science and Engineering. His main focus of study is
          on web development, where he is always eager to learn the latest
          technologies and programming languages to enhance his skills. His
          passion for web development has led him to explore the fascinating
          world of Web 3.0 and blockchain technology. He is keen to learn more
          about the decentralized web and how blockchain can revolutionize the
          way we interact with the internet. Through this portfolio, Nikhil
          hopes to showcase his skills and projects, as well as share his
          journey in exploring the exciting world of web development and
          blockchain.
        </p>
      </div>

      <div className="flex items-center justify-center lg:mt-12 pb-12 ">
        <button className="md:w-32 md:h-9 rounded-full font-bold text-white cursor-pointer md:bg-orange-300 hover:bg-orange-500">
          Download CV
        </button>
      </div>
    </div>
  );
}
