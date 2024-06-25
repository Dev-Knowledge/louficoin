import React from "react";
import { lilita, roboto } from "../font";
import Image from "next/image";

function About() {
  return (
    <section
      id="about"
      className="md:relative flex flex-col h-[1000px] md:px-0 px-5 py-10 md:h-[700px] overflow-hidden lg:max-w-4xl xl:max-w-6xl md:max-w-2xl max-w-[400px] mx-auto text-white "
    >
      <h2
        data-aos="zoom-in"
        data-aos-delay="100"
        className={`${lilita.className} text-[32px] md:text-[44px] text-center md:text-right md:pr-16 w-full`}
      >
        ABOUT LOUFI COIN
      </h2>
      <div
        data-aos="fade-right"
        data-aos-delay="150"
        className="order-2 flex flex-col justify-center lg:gap-0 gap-6 lg:pl-16 pl-10 w-[500px]  lg:w-[640px] h-[450px] md:absolute top-32 left-[320px] xl:left-[520px]   bg-gradient-to-r from-[#FB8F3C]/80 from-10%   to-black to-70% rounded-2xl "
      >
        <p
          className={`${roboto.className} text-sm lg:text-[16px] max-w-[300px] lg:max-w-[400px] font-thin text-[#C8B5A4]`}
        >
          Loufi Coin unveils The Future of the Loufi experience. Much WoW!
          Powered by the leading AI advancments. Loufi Coin has seized the title
          of the smartest Coin on BSC.
        </p>
        <div className="flex flex-col gap-12 justify-center lg:pl-28">
          <button className="w-fit px-4 py-2 rounded-xl bg-[#FB8F3C] text-white shadow-sm">
            Learn more
          </button>
          <p
            className={`${roboto.className} text-sm lg:text-[16px] max-w-[300px] lg:max-w-[400px] text-[#C8B5A4]`}
          >
            Loufi Coin unveils The Future of the Loufi experience. Much WoW!
            Powered by the leading AI advancments. Loufi Coin has seized the
            title of the smartest Coin on BSC.
          </p>
        </div>
      </div>
      <div className="absolute top-16 left-40 w-64 h-64 bg-[#FB8F3C] blur-[100px]"></div>
      <Image
        data-aos="fade-left"
        data-aos-delay="180"
        className="absolute top-20 left-20 z-20 hidden xl:block"
        src="/images/second.png"
        alt="logo"
        width={450}
        height={300}
      />
      <Image
        data-aos="fade-left"
        data-aos-delay="180"
        className="order-1 md:absolute lg:top-10 top-20 -left-12 lg:left-5 z-20 block xl:hidden"
        src="/images/second.png"
        alt="logo"
        width={400}
        height={250}
      />
    </section>
  );
}

export default About;
