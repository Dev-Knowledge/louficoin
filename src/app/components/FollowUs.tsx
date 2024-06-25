import Image from "next/image";
import React from "react";
import { lilita, roboto } from "../font";
import { FaDiscord, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function FollowUs() {
  return (
    <section
      id="followus"
      className=" lg:h-[800px] md:h-[500px] h-[900px] lg:max-w-4xl xl:max-w-6xl md:max-w-2xl max-w-[400px] mx-auto flex md:flex-row flex-col justify-center items-center gap-5 lg:gap-10 text-white "
    >
      <Image
        data-aos="fade-right"
        data-aos-delay="140"
        className="hidden lg:block"
        src="/images/fourth.png"
        alt="logo"
        width={500}
        height={400}
      />
      <Image
        data-aos="fade-right"
        data-aos-delay="140"
        className="lg:hidden block"
        src="/images/fourth.png"
        alt="logo"
        width={300}
        height={350}
      />
      <div className="flex flex-col justify-center items-center gap-5 lg:gap-10">
        <p
          data-aos="fade-down"
          data-aos-delay="200"
          className={`${lilita.className} text-[24px] lg:text-[32px] text-center`}
        >
          FOLLOW LOUFI COIN ON SOCIAL MEDIA
        </p>
        <div className="w-full pt-5">
          <ul className="flex flex-wrap gap-2.5 xl:gap-4 justify-center">
            <li>
              <a
                data-aos="fade-down"
                data-aos-delay="140"
                href="#"
                className="text-2xl bg-linear-bg h-12 w-12 rounded-full grid place-content-center text-white transition hover:-translate-y-1"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                data-aos="fade-down"
                data-aos-delay="140"
                href="#"
                className="text-2xl bg-linear-bg h-12 w-12 rounded-full grid place-content-center text-white transition hover:-translate-y-1"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                data-aos="fade-down"
                data-aos-delay="140"
                href="#"
                className="text-2xl bg-linear-bg h-12 w-12 rounded-full grid place-content-center text-white transition hover:-translate-y-1"
              >
                <FaDiscord />
              </a>
            </li>
            <li>
              <a
                data-aos="fade-down"
                data-aos-delay="140"
                href="#"
                className="text-2xl bg-linear-bg h-12 w-12 rounded-full grid place-content-center text-white transition hover:-translate-y-1"
              >
                <FaGoogle />
              </a>
            </li>
            <li>
              <a
                data-aos="fade-down"
                data-aos-delay="140"
                href="#"
                className="text-2xl bg-linear-bg h-12 w-12 rounded-full grid place-content-center text-white transition hover:-translate-y-1"
              >
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>
        <p
          data-aos="fade-down"
          data-aos-delay="140"
          className={`${roboto.className} text-[14px] lg:text-[16px] md:max-w-[500px] max-w-[350px] text-center text-[#C8B5A4]`}
        >
          Loufi Coin unveils The Future of the Loufi experience. Much WoW!
          Powered by the leading AI advancments. Loufi Coin has seized the title
          of the smartest Coin on BSC.
        </p>
      </div>
    </section>
  );
}

export default FollowUs;
