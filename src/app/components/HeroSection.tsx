import Image from "next/image";
import React from "react";
import { lilita, roboto } from "../font";

function HeroSection() {
  return (
    <section
      id="home"
      className="h-[520px] lg:h-[600px] xl:h-[610px] lg:max-w-4xl xl:max-w-6xl md:max-w-2xl mx-auto overflow-hidden text-white "
    >
      <div className="relative flex items-center justify-start ">
        <div className="bg-gradient-to-t from-[#0f0f0f] py-36 -bottom-7 lg:-bottom-[110px] absolute w-full"></div>
        <p
          data-aos="zoom-in"
          className={`${lilita.className} tracking-widest  text-[#FB8F3C] text-center text-[100px] md:text-[200px] lg:text-[250px] xl:text-[300px] h-[500px] md:leading-[180px] lg:leading-[250px] `}
        >
          LOUFI COIN
        </p>
        <p
          data-aos="fade-right"
          className={`${lilita.className} absolute top-96 left-6 md:left-24 lg:left-20 text-[28px] text-center lg:text-[32px] xl:text-[44px] max-w-[350px] md:max-w-[480px] lg:max-w-[350px] z-50`}
        >
          THE SMARTEST AI-POWERED COIN ON BSC.
        </p>
      </div>
      <Image
        data-aos="fade-right"
        className="absolute z-0 -top-20 left-[400px] hidden xl:block"
        src="/images/hero.png"
        alt="logo"
        width={500}
        height={400}
      />
      <Image
        data-aos="fade-right"
        className="absolute z-0 top-10 left-[280px] hidden lg:block xl:hidden"
        src="/images/hero.png"
        alt="logo"
        width={400}
        height={300}
      />
      <Image
        data-aos="fade-right"
        className="absolute z-0 top-10 left-[60px] md:left-[240px]  lg:hidden block"
        src="/images/hero.png"
        alt="logo"
        width={300}
        height={200}
      />
      <p
        data-aos="fade-down"
        className={`absolute  lg:top-[550px] top-[520px] right-12 md:right-56 lg:right-36 text-center text-[11px] lg:text-[12px] xl:text-[16px] max-w-[480px] z-50`}
      >
        Loufi Coin Unlocks The Incredible Loufi Capability With Ai. <br /> Loufi
        Coin Is 1000x Smarter Than The Original Coin Empowred.
      </p>
    </section>
  );
}

export default HeroSection;
