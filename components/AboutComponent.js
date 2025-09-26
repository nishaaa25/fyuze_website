import Image from "next/image";
import SparkleSvg from "./SparkleSvg";
import SparkleSvg2 from "./SparkleSvg2";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export default function AboutComponent() {
  const aboutCont = useRef();

useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutCont.current,
      start: "top 0%",
      pin: true,
    },
  });

  tl.fromTo(
    ".content-text",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1, stagger: 0.7 }
  )
    .from(".img8", { opacity: 0, left: "-5vw", top: "-2vh", duration: 1.5, delay:0.1 }, "<")
    .from(".img1", { opacity: 0, left: "-15vw", top: "-5vh", duration: 1, delay:0.1 }, "<")
    .from(".img2", { opacity: 0, left: "-5vw", bottom: "-5vh", duration: 1 , delay:0.1}, "<")
    .from(".img3", { opacity: 0, bottom: "-50vh", left: "-10vw", duration: 1, delay:0.1 }, "<")
    .from(".img4", { opacity: 0, right: "-5vw", bottom: "-5vh", duration: 1 , delay:0.1}, "<")
    .from(".img5", { opacity: 0, right: "-10vw", bottom: "-10vh", duration: 1, delay:0.1 }, "<")
    .from(".img6", { opacity: 0, right: "-10vw", top: "-5vh", duration: 1, delay:0.1 }, "<")
    .from(".img7", { opacity: 0, right: "-20vw", top: "-10vh", duration: 1, delay:0.1 }, "<");
});


  return (
    <div
      className="bg-beige-800 w-full h-screen relative overflow-hidden flex-center text-dark-black"
      ref={aboutCont}
    >
      <div className="relative w-[40%] flex flex-col gap-14 -top-14">
        <div className="text-[2.5vw] leading-[3vw] font-archivo font-[100] content-text">
          <div className="w-[5.8vw] h-[2.8vw] relative inline-block">
            <Image
              src="/assets/logo2.svg"
              alt="fyuze"
              fill
              className="inline-block relative object-contain mt-3"
            />
          </div>
          <span className="ml-2">
            Helps from discovery to ROI fully automated, fully optimized.
          </span>
        </div>
        <div className="relative w-7/12 ml-auto bg-white border border-gray-600 rounded-full flex-center p-3 font-[300] text-sm content-text">
          <SparkleSvg2 />
          <input
            type="text"
            placeholder="Travel influencers in Lebanon"
            className="w-full relative ml-3"
          />
        </div>
        <p className="text-sm font-[300] text-gray-500 leading-[100%] content-text">
          Ask FYUZE AI to fetch a real-time, curated list of influencers based
          on your niche, audience, and campaign goals so you save time, money,
          and effort.
        </p>
      </div>
      <div className="absolute bottom-8 right-10 flex-center flex-col gap-1">
        <div className="w-[0.5px] h-[20px] relative bg-gray-500 line1"></div>
        <p className="text-xs text-center font-medium font-archivo leading-[100%] uppercase text text-gray-500">
          Scroll to explore
        </p>
        <div className="w-[0.5px] h-[5px] relative bg-gray-500 line2"></div>
      </div>
      <div className="absolute bottom-8 rounded-full px-8 py-[10px] text-xs leading-[100%] left-10 border-gray-500 border font-medium text-gray-500">
        FIND YOUR NEXT INFLUENCER
      </div>
      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-[12vw] h-[18vw] absolute top-[11vh] left-[-6vw] rounded-[56px] overflow-hidden img1">
          <Image
            src="/assets/img5.png"
            fill
            alt="img-1"
            className="relative object-cover object-left-top"
          />
        </div>
        <div className="w-[4.2vw] h-[6.2vw] absolute bottom-[20vh] left-[8vw] rounded-2xl overflow-hidden img2">
          <Image
            src="/assets/img6.png"
            fill
            alt="img-2"
            className="relative object-cover object-center scale-[1.15]"
          />
        </div>
        <div className="w-[21vw] h-[26vw] absolute -bottom-[19vh] left-[35.5vw] rounded-[32px] overflow-hidden img3">
          <Image
            src="/assets/img7.png"
            fill
            alt="img-3"
            className="relative object-cover object-center scale-[1.15]"
          />
        </div>
        <div className="w-[6.3vw] h-[10vw] absolute bottom-[1.5vh] right-[20vw] rounded-[28px] overflow-hidden img4">
          <Image
            src="/assets/img1.png"
            fill
            alt="img-2"
            className="relative object-cover object-left scale-[1.15]"
          />
        </div>
        <div className="w-[10vw] h-[14vw] absolute bottom-[24vh] -right-[6vw] rounded-[32px] overflow-hidden img5">
          <Image
            src="/assets/img2.png"
            fill
            alt="img-1"
            className="relative object-cover object-center"
          />
        </div>
        <div className="w-[7.2vw] h-[11.5vw] absolute top-[14vh] right-[11vw] rounded-[32px] overflow-hidden img6">
          <Image
            src="/assets/img3.png"
            fill
            alt="img-1"
            className="relative object-cover object-center"
          />
        </div>
        <div className="w-[4.2vw] h-[6.2vw] absolute -top-[2.8vh] left-[60vw] rounded-2xl overflow-hidden img7">
          <Image
            src="/assets/img4.png"
            fill
            alt="img-2"
            className="relative object-cover object-center scale-[1.15]"
          />
        </div>
        <div className="w-[9.5vw] h-[16vw] absolute top-[19vh] left-[14vw] rounded-2xl overflow-hidden bg-[#d9d9d9] img8">
          <Image
            src="/assets/quote.svg"
            fill
            alt="img-2"
            className="relative object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
}
