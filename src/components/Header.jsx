import Image from "next/image";
const Header = () => {
  return (
    <div>
      <Image src={"image"} />
      <div>
        <button>About</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Header;
