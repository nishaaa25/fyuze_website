"use client";
import useLenis from "@/lib/hooks/useLenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";
import { TweenMax, Linear } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const homeContainer = useRef();
  const scrollBtn = useRef();
  const sparkleCont = useRef();
  const tl = useRef(null);

 useEffect(() => {
  const droplets = document.querySelectorAll(".droplet");
  const container = document.querySelector(".droplet-container"); 
  const containerHeight = container.offsetHeight;

  droplets.forEach((droplet) => {
    const startY = -50 - Math.random() * 200; 
    const distance = containerHeight - startY + 100; 
    const duration = 0.8 + Math.random() * 2;

    TweenMax.set(droplet, { y: startY });

    TweenMax.to(droplet, duration, {
      y: startY + distance, 
      repeat: -1,
      ease: Linear.easeNone,
    });
  });
}, []);


  useEffect(() => {
    const sparkles = sparkleCont.current.querySelectorAll(
      ".sparkle-1, .sparkle-2, .sparkle-3"
    );

    tl.current = gsap.timeline({ paused: true });

    const scales = [1.3, 1.2, 1.1, 1];

    scales.forEach((s, i) => {
      tl.current.to(
        sparkles,
        {
          scale: s,
          duration: 0.4,
          ease: "power1.out",
          stagger: 0.15,
        },
        i * 0.2
      );
    });

    tl.current.to(
      sparkles,
      {
        scale: 1,
        duration: 0.3,
        ease: "power1.in",
        stagger: 0.15,
      },
      "+=0"
    );

    tl.current.play();
  }, []);

  useGSAP(() => {
    const tl1 = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5,
    });

    tl1
      .fromTo(
        ".line1",
        {
          clipPath: "inset(0 0 100% 0)",
        },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.5,
        }
      )
      .fromTo(
        ".line2",
        {
          clipPath: "inset(0 0 100% 0)",
        },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.5,
        }
      )
      .from(
        ".text",
        {
          opacity: 0,
          duration: 1,
        },
        "-=1"
      );
  }, homeContainer);

  useLenis();
  return (
    <div
      className="font-sans bg-orange-600 min-h-screen w-full relative flex-center gradient-1"
      ref={homeContainer}
    >
      <div className="relative flex-center flex-col w-1/2 ">
        <div className="relative w-[40vw] h-[20vw]">
          <Image
            src="/assets/fyuze.svg"
            alt="logo"
            fill
            className="object-contain relative z-100"
          />
        </div>
        <div className="relative w-full flex-center flex-col gap-12">
          <div className="flex-center flex-col gap-6 relative">
            <h1 className="font-archivo text-[1.8vw] leading-[1.5vw] font-bold">
              Ask Fyuze to find your next Influencer
            </h1>
            <p className="text-sm font-[300] leading-[110%] w-[58%] mx-auto text-center">
              AI-powered influencer discovery that filters by niche,
              authenticity & ROI so you spend less time searching and more time
              growing.
            </p>
          </div>
          <div className="relative w-full h-full">
            <input
              type="text"
              className="w-full h-full absolute bg-transparent outline-none text-white placeholder:text-white pl-20"
            />
            <div className="relative w-full flex-between p-5 h-full input-gradient rounded-[28px] backdrop-blur-[3px] z-80">
              <div
                className="relative w-[42px] h-[42px] sparkle-cont cursor-pointer z-100"
                ref={sparkleCont}
                onMouseEnter={() => tl.current.restart()}
              >
                <Image
                  src="/assets/sparkle.svg"
                  alt="logo"
                  width={28}
                  height={28}
                  className="relative top-[9px] left-[3.94px] sparkle-1"
                />
                <Image
                  src="/assets/sparkle.svg"
                  alt="logo"
                  width={10}
                  height={10}
                  className="absolute top-[4px] left-[22px] sparkle-2"
                />
                <Image
                  src="/assets/sparkle.svg"
                  alt="logo"
                  width={5}
                  height={5}
                  className="absolute top-[13px] left-[30px] sparkle-3"
                />
              </div>
              <div className="flex-center relative gap-3">
                <div className="relative flex-center p-3 rounded-2xl icon-gradient cursor-pointer">
                  <div className="relative w-5 h-5 ">
                    <Image
                      src="/assets/clip.svg"
                      alt="logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="relative flex-center p-3 rounded-2xl icon-gradient">
                  <div className="relative w-5 h-5">
                    <Image
                      src="/assets/arrow.svg"
                      alt="logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full absolute top-0 left-0 overflow-hidden custom-border h-full z-90 pointer-events-none"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 flex justify-start items-start w-full pl-10 ">
        <div className="flex-between gap-10 relative">
          <Link
            href="/"
            className="text-sm font-[300] leading-[100%] uppercase"
          >
            terms
          </Link>
          <div className="relative w-[2px] h-[2px] rounded-full bg-white"></div>
          <Link
            href="/"
            className="text-sm font-[300] leading-[100%] uppercase"
          >
            privacy policy
          </Link>
        </div>
      </div>
      <div
        className="absolute bottom-8 flex-center flex-col gap-1"
        ref={scrollBtn}
      >
        <div className="w-[0.6px] h-[20px] relative bg-white line1"></div>
        <p className="text-xs text-center font-medium font-archivo leading-[100%] uppercase text">
          Scroll to explore
        </p>
        <div className="w-[0.6px] h-[5px] relative bg-white line2"></div>
      </div>
      <div className="absolute w-full h-full overflow-hidden droplet-container">
        <div className="absolute left-[32.5vw]  w-[0.5px] h-[100px] gradient-2 z-10 droplet"></div>
        <div className="absolute left-[4vw] w-[0.5px] h-[255px] gradient-2 droplet"></div>
        <div className="absolute left-[4vw]  w-[0.5px] h-[255px] gradient-2 droplet"></div>
        <div className="absolute left-[15vw]  w-[0.5px] h-[255px] gradient-2 droplet"></div>
        <div className="absolute left-[21vw]  w-[0.5px] h-[255px] gradient-2 droplet"></div>
        <div className="absolute left-[24vw] w-[0.5px] h-[255px] gradient-2 droplet"></div>
        <div className="absolute left-[41.5vw]  w-[0.5px] h-[210px] gradient-2 z-10 droplet"></div>
        <div className="absolute left-[57vw] w-[0.5px] h-[130px] gradient-2 z-1 droplet"></div>
        <div className="absolute left-[35vw] w-[0.5px] h-[255px] gradient-2 z-1 droplet"></div>
        <div className="absolute left-[66vw] w-[0.5px] h-[255px] gradient-2 z-1 droplet"></div>
        <div className="absolute left-[68.5vw]  w-[0.5px] h-[255px] gradient-2 z-1 droplet"></div>
        <div className="absolute left-[78vw]  w-[0.5px] h-[255px] gradient-2 z-1 droplet"></div>
        <div className="absolute left-[85vw] w-[0.5px] h-[255px] gradient-2 z-1 droplet"></div>
        <div className="absolute right-[4vw] w-[0.5px] h-[255px] gradient-2 z-1 droplet"></div>
      </div>
    </div>
  );
}
