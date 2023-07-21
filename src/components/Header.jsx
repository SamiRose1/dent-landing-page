import Image from "next/image";
import Logo from "../images/logo.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center py-5 bg-sky-600 bg-opacity-5 text-orange-400 fixed w-full">
      <Image src={Logo} className="w-10 h-10" />
      <div className=" w-1/4 items-center flex justify-around">
        <button className=" px-2 hover:underline">About</button>
        <button className="  px-2 hover:underline ">Contact</button>
      </div>
    </div>
  );
};

export default Header;
