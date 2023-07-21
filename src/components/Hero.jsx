import Image from "next/image";
import HeroPng from "../images/hero.jpg";
const Hero = () => {
  return (
    <div className="h-screen flex justify-around items-center bg-sky-100">
      <div className="flow-root  justify-around items-center w-1/2 lg:text-lg md:text-md sm:text-sm text-center px-10 py-10 h-3/5 bg-slate-400 text-white rounded-lg shadow-lg  shadow-slate-800 my-7">
        <h1 className="text-2xl lg:text-3xl md:text-xl my-5 ">Welcome!</h1>
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
