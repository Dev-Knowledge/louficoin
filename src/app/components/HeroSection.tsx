import Image from "next/image";
import React from "react";
import { lilita, roboto } from "../font";

function HeroSection() {
  return (
    <section
      id="home"
      className="h-[650px] lg:h-[600px] xl:h-[610px] lg:max-w-4xl xl:max-w-6xl md:max-w-2xl mx-auto overflow-hidden text-white "
    >
      <div className="relative flex lg:flex-row flex-col items-center justify-center ">
        <div className="bg-gradient-to-t from-[#0f0f0f] py-36 -bottom-14 lg:-bottom-[110px] absolute w-full"></div>
        <p
          data-aos="zoom-in"
          className={`${lilita.className} tracking-widest w-full text-[#FB8F3C] text-center text-[110px] md:text-[200px] lg:text-[250px] xl:text-[300px] h-[500px] md:leading-[180px] lg:leading-[250px] `}
        >
          LOUFI COIN
        </p>
        <p
          data-aos="fade-right"
          className={`${lilita.className} md:absolute top-96 left-6 md:left-24 lg:left-20 text-[28px] text-center lg:text-[32px] xl:text-[44px] max-w-[350px] md:max-w-[480px] lg:max-w-[350px] z-50`}
        >
          THE SMARTEST AI-POWERED COIN ON BSC.
        </p>
        <p
          data-aos="fade-down"
          className={`lg:absolute lg:top-[550px] top-[520px] right-12 md:right-56 lg:right-36 text-center text-[11px] lg:text-[12px] xl:text-[16px] max-w-[480px] z-50`}
        >
          Loufi Coin Unlocks The Incredible Loufi Capability With Ai. <br />{" "}
          Loufi Coin Is 1000x Smarter Than The Original Coin Empowred.
        </p>
        <div className="absolute w-full h-full flex items-center justify-center">
          <Image
            data-aos="fade-right"
            className=" hidden xl:block"
            src="/images/hero.png"
            alt="logo"
            width={500}
            height={400}
          />
          <Image
            data-aos="fade-right"
            className=" hidden lg:block xl:hidden"
            src="/images/hero.png"
            alt="logo"
            width={400}
            height={300}
          />
          <Image
            data-aos="fade-right"
            className="md:left-[240px]  lg:hidden block"
            src="/images/hero.png"
            alt="logo"
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
