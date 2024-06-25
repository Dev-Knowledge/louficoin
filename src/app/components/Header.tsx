import Image from "next/image";
import Humberger from "./ui/Humberger";

function Header() {
  return (
    <header className="relative lg:max-w-4xl xl:max-w-6xl md:max-w-2xl max-w-[400px] mx-auto flex justify-between items-center py-3 px-5 text-white ">
      <h1 className="text-xl font-bold z-40 ">LOUFICOIN</h1>
      <Image
        className="absolute top-0 left-14 z-30"
        src="/images/hero.png"
        alt="logo"
        width={30}
        height={30}
      />
      <Humberger />
    </header>
  );
}

export default Header;
