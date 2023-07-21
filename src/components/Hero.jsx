import Image from "next/image";
import HeroPng from "../images/hero.jpg";
const Hero = () => {
  return (
    <div className="h-screen flex justify-around items-center bg-[url('../images/main.jpg')] bg-cover">
      <div className="flex justify-center items-center colm-auto">
        <h1>Welcome!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis vero
          laborum similique eaque voluptates eius impedit nobis quaerat cum?
          Laudantium tempore ducimus rerum optio nemo ipsam dignissimos
          explicabo dolores nesciunt.
        </p>
      </div>
    </div>
  );
};

export default Hero;
