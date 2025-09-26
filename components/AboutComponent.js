"use client";
import Image from "next/image";
import SparkleSvg from "./SparkleSvg";
import SparkleSvg2 from "./SparkleSvg2";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function AboutComponent() {
  const aboutCont = useRef();

  // We'll move the images horizontally based on cursor X position
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!aboutCont.current) return;
      const dims = aboutCont.current.getBoundingClientRect();
      // Calculate normalized X and Y position (-1 to 1)
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const xNorm = gsap.utils.clamp(
        -1,
        1,
        ((mouseX - dims.left) / dims.width) * 2 - 1
      );
      const yNorm = gsap.utils.clamp(
        -1,
        1,
        ((mouseY - dims.top) / dims.height) * 2 - 1
      );

      // Move all images horizontally and vertically based on xNorm and yNorm
      // You can adjust the multiplier for more/less movement
      const moveAmount = 40; // px, max movement left/right
      const moveAmountY = 30; // px, max movement up/down

      // Move each image with a different factor for parallax effect
      const imgConfigs = [
        { selector: ".img1", factor: 1.5 },
        { selector: ".img2", factor: 1 },
        { selector: ".img3", factor: 0.6 },
        { selector: ".img4", factor: 0.2 },
        { selector: ".img5", factor: -0.8 },
        { selector: ".img6", factor: -1.2 },
        { selector: ".img7", factor: -1.7 },
        { selector: ".img8", factor: 0.5 },
      ];

      imgConfigs.forEach(({ selector, factor }) => {
        gsap.to(selector, {
          x: xNorm * moveAmount * factor,
          y: yNorm * moveAmountY * factor,
          duration: 2,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutCont.current,
        start: "top 50%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });
    tl.from(
      [".img1", ".img2", ".img3", ".img4", ".img5", ".img6", ".img7", ".img8"],
      {
        opacity: 0,
        filter: "blur(0px)",
        duration: 2,
        ease: "power2.inOut",
      },
      "q"
    )
      .from(
        ".img1",
        { left: "-15vw", top: "-5vh", filter: "blur(0px)", duration: 2, ease: "power2.inOut" },
        "q"
      )
      .from(
        ".img2",
        { left: "-5vw", bottom: "-5vh", filter: "blur(0px)", duration: 2, ease: "power2.inOut" },
        "q"
      )
      .from(
        ".img3",
        { bottom: "-50vh", left: "-10vw", filter: "blur(0px)", duration: 2, ease: "power2.inOut" },
        "q"
      )
      .from(
        ".img4",
        { right: "-5vw", bottom: "-5vh", filter: "blur(0px)", duration: 2, ease: "power2.inOut" },
        "q"
      )
      .from(
        ".img5",
        { right: "-10vw", bottom: "-10vh", filter: "blur(0px)", duration: 2, ease: "power2.inOut" },
        "q"
      )
      .from(
        ".img6",
        { right: "-10vw", top: "-5vh", filter: "blur(0px)", duration: 2, ease: "power2.inOut" },
        "q"
      )
      .from(
        ".img7",
        { right: "-20vw", top: "-10vh", filter: "blur(0px)", duration: 2, ease: "power2.inOut" },
        "q"
      )
      .from(
        ".img8",
        { left: "-5vw", top: "-2vh", filter: "blur(0px)", duration: 2, ease: "power2.inOut" },
        "q"
      )
      .fromTo(
        ".content-text",
        { opacity: 0, y: 80, filter: "blur(4px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.2, duration: 2, ease: "power2.inOut" },
        "q"
      );
  });

  return (
    <div className="w-full h-[100vh] bg-transparent">
      <div
        className="bg-beige-800 w-full h-screen sticky top-0 overflow-hidden flex-center text-dark-black"
        ref={aboutCont}
      >
        <div className="relative z-20 w-[40%] flex flex-col gap-14 -top-14">
          <div
            className="text-[2.5vw] leading-[3vw] font-archivo font-[100] content-text"
            style={{ filter: "blur(4px)", willChange: "opacity, transform, filter" }}
          >
            <div className="w-[5.8vw] h-[2.8vw] relative inline-block">
              <Image
                src="/assets/logo2.svg"
                alt="fyuze"
                fill
                className="inline-block relative object-contain mt-3"
                style={{ willChange: "opacity, transform, filter" }}
              />
            </div>
            <span className="ml-2">
              Helps from discovery to ROI fully automated, fully optimized.
            </span>
          </div>
          <div
            className="relative w-7/12 ml-auto bg-white border border-gray-600 rounded-full flex-center p-3 font-[300] text-sm content-text"
            style={{ filter: "blur(4px)", willChange: "opacity, transform, filter" }}
          >
            <SparkleSvg2 />
            <input
              type="text"
              placeholder="Travel influencers in Lebanon"
              className="w-full relative ml-3"
              style={{ willChange: "opacity, transform, filter" }}
            />
          </div>
          <p
            className="text-sm font-[300] text-gray-500 leading-[100%] content-text"
            style={{ filter: "blur(4px)", willChange: "opacity, transform, filter" }}
          >
            Ask FYUZE AI to fetch a real-time, curated list of influencers based
            on your niche, audience, and campaign goals so you save time, money,
            and effort.
          </p>
        </div>
        <div className="flex-between w-11/12 mx-auto absolute z-20 bottom-8">
          <div className="rounded-full px-8 py-[10px] text-xs leading-[100%] left-10 border-gray-500 border font-medium text-gray-500">
            FIND YOUR NEXT INFLUENCER
          </div>
          <div className="flex-center flex-col gap-1">
            <div className="w-[0.5px] h-[20px] relative bg-gray-500 line1"></div>
            <p className="text-xs text-center font-medium font-archivo leading-[100%] uppercase text text-gray-500">
              Scroll to explore
            </p>
            <div className="w-[0.5px] h-[5px] relative bg-gray-500 line2"></div>
          </div>
        </div>
        <div className="w-full h-full absolute z-20 top-0 left-0">
          <div
            className="w-[12vw] h-[18vw] absolute top-[11vh] left-[-6vw] rounded-[56px] overflow-hidden img1"
            style={{ filter: "blur(4px)", willChange: "opacity, transform, filter" }}
          >
            <Image
              src="/assets/img5.png"
              fill
              alt="img-1"
              className="relative object-cover object-left-top"
              style={{ willChange: "opacity, transform, filter" }}
            />
          </div>
          <div
            className="w-[4.2vw] h-[6.2vw] absolute bottom-[20vh] left-[8vw] rounded-2xl overflow-hidden img2"
            style={{ filter: "blur(4px)", willChange: "opacity, transform, filter" }}
          >
            <Image
              src="/assets/img6.png"
              fill
              alt="img-2"
              className="relative object-cover object-center scale-[1.15]"
              style={{ willChange: "opacity, transform, filter" }}
            />
          </div>
          <div
            className="w-[21vw] h-[26vw] absolute -bottom-[19vh] left-[35.5vw] rounded-[32px] overflow-hidden img3"
            style={{ filter: "blur(4px)", willChange: "opacity, transform, filter" }}
          >
            <Image
              src="/assets/img7.png"
              fill
              alt="img-3"
              className="relative object-cover object-center scale-[1.15]"
              style={{ willChange: "opacity, transform, filter" }}
            />
          </div>
          <div
            className="w-[6.3vw] h-[10vw] absolute bottom-[1.5vh] right-[20vw] rounded-[28px] overflow-hidden img4"
            style={{ filter: "blur(4px)", willChange: "opacity, transform, filter" }}
          >
            <Image
              src="/assets/img1.png"
              fill
              alt="img-2"
              className="relative object-cover object-left scale-[1.15]"
              style={{ willChange: "opacity, transform, filter" }}
            />
          </div>
          <div
            className="w-[10vw] h-[14vw] absolute bottom-[24vh] -right-[6vw] rounded-[32px] overflow-hidden img5"
            style={{ filter: "blur(4px)", willChange: "opacity, transform, filter" }}
          >
            <Image
              src="/assets/img2.png"
              fill
              alt="img-1"
              className="relative object-cover object-center"
              style={{ willChange: "opacity, transform, filter" }}
            />
          </div>
          <div
            className="w-[7.2vw] h-[11.5vw] absolute top-[14vh] right-[11vw] rounded-[32px] overflow-hidden img6"
            style={{ filter: "blur(4px)", willChange: "opacity, transform, filter" }}
          >
            <Image
              src="/assets/img3.png"
              fill
              alt="img-1"
              className="relative object-cover object-center"
              style={{ willChange: "opacity, transform, filter" }}
            />
          </div>
          <div
            className="w-[4.2vw] h-[6.2vw] absolute -top-[2.8vh] left-[60vw] rounded-2xl overflow-hidden img7"
            style={{ filter: "blur(4px)", willChange: "opacity, transform, filter" }}
          >
            <Image
              src="/assets/img4.png"
              fill
              alt="img-2"
              className="relative object-cover object-center scale-[1.15]"
              style={{ willChange: "opacity, transform, filter" }}
            />
          </div>
          <div
            className="w-[9.5vw] h-[16vw] absolute top-[19vh] left-[14vw] rounded-2xl overflow-hidden bg-[#d9d9d9] img8"
            style={{ filter: "blur(4px)", willChange: "opacity, transform, filter" }}
          >
            <Image
              src="/assets/quote.svg"
              fill
              alt="img-2"
              className="relative object-contain object-center"
              style={{ willChange: "opacity, transform, filter" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
