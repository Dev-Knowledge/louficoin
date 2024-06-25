import React from "react";
import { lilita, roboto } from "../font";
import Image from "next/image";

function TokenOmics() {
  return (
    <section
      id="tokenomics"
      className="relative h-[1500px] lg:h-[800px] xl:h-[700px] py-10 lg:max-w-4xl xl:max-w-6xl md:max-w-2xl max-w-[400px] mx-auto  text-white "
    >
      <h2
        data-aos="zoom-in"
        data-aos-delay="180"
        className={`${lilita.className} text-[36px] text-center lg:text-[44px] lg:pl-16 w-full `}
      >
        LOUFI COIN TOKENOMICS
      </h2>
      <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-5 xl:gap-52 mt-16">
        <div className="flex flex-col justify-center items-center gap-[530px] lg:gap-44 xl:gap-28">
          <p
            data-aos="fade-right"
            data-aos-delay="150"
            className={`${roboto.className} text-center text-[16px] max-w-[400px]  text-[#C8B5A4] z-10`}
          >
            $Loufi Coin is the currency that will power the community of the
            smartest AI-powered COIN
          </p>
          <div className="flex flex-col justify-center items-center gap-6 ">
            <p
              data-aos="fade-down"
              data-aos-delay="140"
              className={`${lilita.className} text-5xl z-10`}
            >
              Taxes
            </p>
            <div
              data-aos="fade-down"
              data-aos-delay="140"
              className="w-[390px] md:w-[416px] h-[48px] flex items-center justify-between px-12 z-10 "
              style={{ backgroundImage: "url('/images/rectangle.png')" }}
            >
              <p>Liquidity</p>
              <p>1%</p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="140"
              className="w-[390px] md:w-[416px] h-[48px] flex items-center justify-between px-12 "
              style={{ backgroundImage: "url('/images/rectangle.png')" }}
            >
              <p>Marketing</p>
              <p>2%</p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="140"
              className="w-[390px] md:w-[416px] h-[48px] flex items-center justify-between px-12 z-10"
              style={{ backgroundImage: "url('/images/rectangle.png')" }}
            >
              <p>Dev</p>
              <p>2%</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="140"
          className="flex flex-col justify-center items-center gap-6 "
        >
          <p
            data-aos="fade-down"
            data-aos-delay="120"
            className={`${lilita.className} text-5xl mt-5 md:mt-5 `}
          >
            About Token
          </p>
          <div
            data-aos="fade-down"
            data-aos-delay="140"
            className="w-[390px] md:w-[416px] h-[48px] flex items-center justify-between px-12 md:px-12 z-10"
            style={{ backgroundImage: "url('/images/rectangle.png')" }}
          >
            <p>Token name:</p>
            <p>LOUFI</p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="140"
            className="w-[390px] md:w-[416px] h-[48px] flex items-center justify-between px-12 z-10 "
            style={{ backgroundImage: "url('/images/rectangle.png')" }}
          >
            <p>Token Symbol</p>
            <p>LOU</p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="140"
            className="w-[390px] md:w-[416px] h-[48px] flex items-center justify-between px-12 z-10 "
            style={{ backgroundImage: "url('/images/rectangle.png')" }}
          >
            <p>Total Supply</p>
            <p>10,000,000</p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="140"
            className="w-[390px] md:w-[416px] h-[48px] flex items-center justify-center px-12 z-10 "
            style={{ backgroundImage: "url('/images/rectangle.png')" }}
          >
            <p>Token adress</p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="140"
            className="w-[390px] md:w-[416px] h-[48px] flex items-center justify-between px-12 "
            style={{ backgroundImage: "url('/images/rectangle.png')" }}
          >
            <p>0x398F9a102Fd5ebEc7cc10389D974A0</p>
          </div>
        </div>
      </div>
      <Image
        data-aos="fade-left"
        data-aos-delay="100"
        className="absolute top-60 md:top-52 lg:top-40 left-0 md:left-36 lg:left-48 xl:left-96 z-0"
        src="/images/third.png"
        alt="tokenomics"
        width={420}
        height={400}
      />
    </section>
  );
}

export default TokenOmics;
