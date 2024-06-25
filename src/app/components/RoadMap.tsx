import React from "react";
import { lilita, roboto } from "../font";

function RoadMap() {
  return (
    <section
      id="roadmap"
      className="lg:h-[800px] h-[1800px] lg:max-w-4xl xl:max-w-6xl md:max-w-2xl  mx-auto py-10 text-white lg:flex flex-col items-center "
    >
      <h2
        data-aos="zoom-in"
        data-aos-delay="140"
        className={`${lilita.className} text-[44px] text-center lg:pl-16 w-full `}
      >
        LOUFI COIN ROADMAP
      </h2>
      <p
        data-aos="fade-down"
        data-aos-delay="140"
        className={`${roboto.className} text-center text-[16px] max-w-[390px] md:max-w-[400px] md:ml-32 lg:ml-16 font-thin text-[#C8B5A4] z-10`}
      >
        $Loufi Coin aim to create a decentralized finance (DeFi) ecosystem
        centered around the LOUFI community
      </p>
      <div className=" flex lg:flex-row flex-col justify-center items-center lg:items-start gap-5 px-4">
        <div
          data-aos="fade-down"
          data-aos-delay="150"
          className="relative py-5 flex flex-col max-w-[400px] lg:max-w-[300px] h-[500px] items-center justify-center gap-10 bg-gradient-to-t from-[#C46A00] lg:mt-28 px-5"
        >
          <p
            className={`${lilita.className} text-center text-[140px]  w-full `}
          >
            01
          </p>
          <div className="flex flex-col justify-around gap-2">
            <p>★ Presale</p>
            <p>★ Launch</p>
            <p>★ Coingecko/Coinmarketcap listings</p>
            <p>
              ★ Trending on AveDex, Dexview, Dextool & other data aggregators
            </p>
            <p>★ Listings on major Exchanges</p>
          </div>
          <div className="absolute top-52 w-[240px] h-[100px] blur-[50px] bg-[#FB8F3C] flex flex-col items-end"></div>{" "}
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="250"
          className="relative py-5 flex flex-col max-w-[400px] lg:max-w-[300px] h-[500px] items-center justify-center gap-10 bg-gradient-to-t from-[#C46A00] lg:mt-16 px-5"
        >
          <p className={`${lilita.className} text-center text-[140px] w-full `}>
            02
          </p>
          <div className="flex flex-col gap-2">
            <p>★ Presale</p>
            <p>★ Launch</p>
            <p>★ Coingecko/Coinmarketcap listings</p>
            <p>
              ★ Trending on AveDex, Dexview, Dextool & other data aggregators
            </p>
            <p>★ Listings on major Exchanges</p>
          </div>
          <div className="absolute top-44 w-[300px] h-[100px] blur-[50px] bg-[#FB8F3C] flex flex-col items-end"></div>{" "}
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="300"
          className="relative py-5 flex flex-col max-w-[400px] lg:max-w-[300px] h-[500px] items-center justify-center gap-10 bg-gradient-to-t from-[#C46A00] px-5"
        >
          <p className={`${lilita.className} text-center text-[140px] w-full `}>
            03
          </p>
          <div className="flex flex-col gap-2">
            <p>★ Presale</p>
            <p>★ Launch</p>
            <p>★ Coingecko/Coinmarketcap listings</p>
            <p>
              ★ Trending on AveDex, Dexview, Dextool & other data aggregators
            </p>
            <p>★ Listings on major Exchanges</p>
          </div>
          <div className="absolute top-32 w-[300px] h-[100px] blur-[50px] bg-[#FB8F3C] flex flex-col items-end"></div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
