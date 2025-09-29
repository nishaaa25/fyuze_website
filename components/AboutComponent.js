"use client";
import Image from "next/image";
import SparkleSvg2 from "./SparkleSvg2";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function AboutComponent() {
  const aboutCont = useRef(null);
  const inputRef = useRef(null);
  const cursorRef = useRef(null);
  const step3Reached = useRef(false);
  const [sparkleRestart, setSparkleRestart] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!aboutCont.current) return;
      const dims = aboutCont.current.getBoundingClientRect();
      const xNorm = gsap.utils.clamp(
        -1,
        1,
        ((e.clientX - dims.left) / dims.width) * 2 - 1
      );
      const yNorm = gsap.utils.clamp(
        -1,
        1,
        ((e.clientY - dims.top) / dims.height) * 2 - 1
      );

      const moveAmount = 40;
      const moveAmountY = 30;
      const imgConfigs = [
        { selector: ".img1", factor: 1.5 },
        { selector: ".img2", factor: 1 },
        { selector: ".img3", factor: 0.6 },
        { selector: ".img4", factor: 0.2 },
        { selector: ".img5", factor: -0.8 },
        { selector: ".img6", factor: -1.2, disableOnStep3: true },
        { selector: ".img7", factor: -1.7 },
        { selector: ".img8", factor: 0.5 },
      ];

      imgConfigs.forEach(({ selector, factor, disableOnStep3 }) => {
        if (disableOnStep3 && step3Reached.current) return; // skip img6 after step3
        gsap.to(selector, {
          x: xNorm * moveAmount * factor,
          y: yNorm * moveAmountY * factor,
          duration: 2,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const loadTl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutCont.current,
        start: "top top",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        scrub: false,
      },
    });
    loadTl
      .from(
        [
          ".img1",
          ".img2",
          ".img3",
          ".img4",
          ".img5",
          ".img6",
          ".img7",
          ".img8",
        ],
        {
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "q"
      )
      .from(
        ".img1",
        {
          left: "-15vw",
          top: "-5vh",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "q"
      )
      .from(
        ".img2",
        {
          left: "-5vw",
          bottom: "-5vh",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "q"
      )
      .from(
        ".img3",
        {
          bottom: "-50vh",
          left: "-10vw",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "q"
      )
      .from(
        ".img4",
        {
          right: "-5vw",
          bottom: "-5vh",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "q"
      )
      .from(
        ".img5",
        {
          right: "-10vw",
          bottom: "-10vh",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "q"
      )
      .from(
        ".img6",
        {
          right: "-10vw",
          top: "-5vh",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "q"
      )
      .from(
        ".img7",
        {
          right: "-20vw",
          top: "-10vh",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "q"
      )
      .from(
        ".img8",
        {
          left: "-5vw",
          top: "-2vh",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "q"
      )
      .fromTo(
        ".content-text",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 1,
          ease: "power2.out",
        },
        "q"
      );
  }, []);

  useEffect(() => {
    const text = "Travel influencers in Lebanon";

    const heading = new SplitType(aboutCont.current.querySelector("h3"), {
      types: "words",
    });
    gsap.set(heading.words, {
      opacity: 0,
      y: 30, // slightly down so it can animate up
    });
    gsap.set(".desc", {
      opacity: 0,
      y: 30, // slightly down so it can animate up
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutCont.current,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
      },
    });

    // Step 2: Typewriter effect
    const chars = { value: 0 };
    tl.to(
      chars,
      {
        value: text.length,
        duration: 2,
        delay: 1,
        ease: "none",
        onUpdate: () => {
          if (inputRef.current) {
            inputRef.current.placeholder = text.slice(
              0,
              Math.floor(chars.value)
            );
          }
        },
      },
      "step2"
    );

    // Step 3: Return images to original positions
    tl.to(
      ".img1",
      {
        left: "-20vw",
        top: "-5vh",
        opacity: 1,
        delay: 1,
        duration: 1,
        ease: "power2.in",
      },
      "step3"
    )
      .to(
        ".img2",
        {
          left: "-5vw",
          bottom: "-5vh",
          opacity: 1,
          delay: 1,
          duration: 1,
          ease: "power2.in",
        },
        "step3"
      )
      .to(
        ".img3",
        {
          bottom: "-50vh",
          left: "-10vw",
          opacity: 1,
          delay: 1,
          duration: 1,
          ease: "power2.in",
        },
        "step3"
      )
      .to(
        ".img4",
        {
          right: "-8vw",
          bottom: "-15vh",
          opacity: 1,
          delay: 1,
          duration: 1,
          ease: "power2.in",
        },
        "step3"
      )
      .to(
        ".img5",
        {
          right: "-15vw",
          bottom: "-10vh",
          opacity: 1,
          delay: 1,
          duration: 1,
          ease: "power2.in",
        },
        "step3"
      )
      .to(
        ".img6",
        {
          x: () =>
            window.innerWidth / 2 -
            document.querySelector(".img6").getBoundingClientRect().left -
            document.querySelector(".img6").offsetWidth / 2,
          y: () =>
            window.innerHeight / 2 -
            document.querySelector(".img6").getBoundingClientRect().top -
            document.querySelector(".img6").offsetHeight / 2 +
            40,
          scale: 2.8,
          borderRadius: "20px",
          opacity: 1,
          delay: 1,
          duration: 1,
          ease: "power2.in",
          onStart: () => {
            step3Reached.current = true;
          },
        },
        "step3"
      )
      .to(
        ".img7",
        {
          right: "-20vw",
          top: "-15vh",
          opacity: 1,
          duration: 1,
          delay: 1,
          ease: "power2.in",
        },
        "step3"
      )
      .to(
        ".img8",
        {
          left: "-10vw",
          top: "-2vh",
          opacity: 1,
          delay: 1,
          duration: 1,
          ease: "power2.in",
        },
        "step3"
      )
      .to(
        ".content-text.heading",
        { y: -60, opacity: 0, delay: 1, duration: 1, ease: "power2.in" },
        "step3"
      )
      .to(
        ".content-text.para",
        { y: 60, opacity: 0, delay: 1, duration: 1, ease: "power2.in" },
        "step3"
      )
      .to(
        ".input-field",
        {
          scale: 1.2,
          x: () =>
            window.innerWidth / 2 -
            document.querySelector(".input-field").getBoundingClientRect()
              .left -
            document.querySelector(".input-field").offsetWidth / 2,
          y: () =>
            window.innerHeight / 4 -
            document.querySelector(".input-field").getBoundingClientRect().top -
            document.querySelector(".input-field").offsetHeight / 2,
          delay: 1,
          duration: 1,
          ease: "power2.in",
        },
        "step3"
      )
      .to(
        heading.words,
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 1.5,
          stagger: 0.1,
          ease: "power2.in",
        },
        "step3"
      )
      .to(
        ".desc",
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 1.5,
          stagger: 0.3,
          ease: "power2.in",
        },
        "step3"
      );
  }, []);

  // === Cursor Blink Effect ===
  useEffect(() => {
    if (!cursorRef.current) return;

    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="w-full h-[300vh] bg-transparent">
      <div
        className="bg-beige-800 w-full h-screen sticky top-0 overflow-hidden flex-center text-dark-black"
        ref={aboutCont}
      >
        <div className="relative w-[40%] flex flex-col gap-14 -top-14">
          <div className="text-[2.5vw] leading-[3vw] font-archivo font-[100] content-text heading z-10">
            <div className="w-[5.8vw] h-[2.8vw] relative inline-block">
              <Image
                src="/assets/logo2.svg"
                alt="fyuze"
                fill
                className="object-contain mt-3"
              />
            </div>
            <span className="ml-2">
              Helps from discovery to ROI fully automated, fully optimized.
            </span>
          </div>
          <div className="relative w-7/12 ml-auto bg-white border border-gray-600 rounded-full flex-center p-3 font-[300] text-sm content-text input-field z-50">
            <SparkleSvg2 restart={sparkleRestart} />
            <div className="relative w-full ml-3">
              <input
                ref={inputRef}
                type="text"
                placeholder=""
                className="w-full relative bg-transparent border-none outline-none"
              />
              <span
                ref={cursorRef}
                className="absolute top-0 left-0 w-[1px] h-full bg-black"
              ></span>
            </div>
          </div>
          <p className="text-sm font-[300] text-gray-500 leading-[100%] content-text para z-10">
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
        {/* Floating Images */}
        <div className="w-full h-full absolute z-20 top-0 left-0">
          <div className="w-[12vw] h-[18vw] absolute top-[11vh] left-[-6vw] rounded-[56px] overflow-hidden img1">
            <Image
              src="/assets/img5.png"
              fill
              alt="img1"
              className="object-cover object-left-top"
            />
          </div>
          <div className="w-[4.2vw] h-[6.2vw] z-10 absolute bottom-[20vh] left-[8vw] rounded-2xl overflow-hidden img2">
            <Image
              src="/assets/img6.png"
              fill
              alt="img2"
              className="object-cover object-center scale-[1.15]"
            />
          </div>
          <div className="w-[21vw] h-[26vw] absolute -bottom-[19vh] left-[35.5vw] rounded-[32px] overflow-hidden img3">
            <Image
              src="/assets/img7.png"
              fill
              alt="img3"
              className="object-cover object-center scale-[1.15]"
            />
          </div>
          <div className="w-[6.3vw] h-[10vw] absolute bottom-[1.5vh] right-[20vw] rounded-[28px] overflow-hidden img4">
            <Image
              src="/assets/img1.png"
              fill
              alt="img4"
              className="object-cover object-left scale-[1.15]"
            />
          </div>
          <div className="w-[10vw] h-[14vw] absolute bottom-[24vh] -right-[6vw] rounded-[32px] overflow-hidden img5">
            <Image
              src="/assets/img2.png"
              fill
              alt="img5"
              className="object-cover object-center"
            />
          </div>
          <div className="w-[7.2vw] h-[11.5vw] absolute top-[14vh] right-[11vw] rounded-[32px] overflow-hidden img6">
            <Image
              src="/assets/img3.png"
              fill
              alt="img6"
              className="object-cover object-center"
            />
          </div>
          <div className="w-[4.2vw] h-[6.2vw] absolute -top-[2.8vh] left-[60vw] rounded-2xl overflow-hidden img7">
            <Image
              src="/assets/img4.png"
              fill
              alt="img7"
              className="object-cover object-center scale-[1.15]"
            />
          </div>
          <div className="w-[9.5vw] h-[16vw] absolute top-[19vh] left-[14vw] rounded-2xl overflow-hidden bg-[#d9d9d9] img8">
            <Image
              src="/assets/quote.svg"
              fill
              alt="img8"
              className="object-contain object-center"
            />
          </div>
        </div>
        <div className="w-[88%] absolute flex justify-between h-[40vh]">
          <h3
            className="text-[2.6vw] leading-[3vw] font-bold font-archivo w-3/12"
            style={{ willChange: "opacity, transform, filter" }}
          >
            Discover the Right Voices
          </h3>
          <div className="text-sm leading-[120%] text-gray-500 font-[300] self-center relative right-[5vw] top-[5vh]">
            <p className="opacity-0 desc" >
              Search millions of creators in seconds using
            </p>
            <p className="opacity-0 desc" >
              AI-powered filters:
              <span className="font-medium">audience authenticity,</span>
            </p>
            <p className="font-medium  desc opacity-0" >
              geo-verification, sentiment, engagement
            </p>
            <p className="font-medium desc opacity-0" >
              quality, niche fit, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
