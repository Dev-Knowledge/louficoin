import Image from "next/image";
import React from "react";

function Partners() {
  return (
    <section id="partners" className="bg-[#0D0D0D]">
      <div
        data-aos="fade-right"
        data-aos-delay="300"
        className="w-full text-white flex flex-wrap items-center justify-around gap-5 py-3  border-[#c5c5c5] border-t-[1px] border-b-[1px]"
      >
        <Image src="/images/1.png" alt="logo" width={150} height={50} />
        <Image src="/images/3.png" alt="logo" width={150} height={50} />
        <Image src="/images/4.png" alt="logo" width={150} height={50} />
        <Image src="/images/5.png" alt="logo" width={150} height={50} />
        <Image src="/images/2.png" alt="logo" width={150} height={50} />
      </div>
    </section>
  );
}

export default Partners;
