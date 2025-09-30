"use client";
import AboutComponent from "@/components/AboutComponent";
import HeroComponent from "@/components/HeroComponent";
import useLenis from "@/lib/hooks/useLenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useContext } from "react";
import { ThemeContext } from "@/lib/hooks/ThemeContext";
import SocialPlatformsComponent from "@/components/SocialPlatformsComponent";
import FAQsection from "@/components/FAQsection";
import SplashCursor from "@/components/SplashCursor";
import CanvasSimulation from "@/components/CanvasSimulation";
import LiquidEther2 from "@/components/LiquidEther";
import Image from "next/image";
import GlassSurface from "@/components/GlassSurface";
import FeaturesComponent from "@/components/FeaturesComponent";
import FeatureCards from "@/components/FeatureCards";

export default function Home() {
  const { setDarkText } = useContext(ThemeContext);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDarkText(entry.target.dataset.text === "dark");
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [setDarkText]);

  useLenis();
  return (
    <>
      {/* <SplashCursor /> */}
      <div className="relative w-full z-50">
        <div className="section" data-text="light">
          <HeroComponent />
        </div>
        <div className="section h-[600vh]" data-text="dark">
          <AboutComponent />
        </div>
        <div className="section bg-[#E2E1DC] h-[200vh]" data-text="light">
          <FeaturesComponent />
          <FeatureCards />
        </div>
        {/* <div className="section" data-text="dark">
          <SocialPlatformsComponent />
        </div>
        <div className="section" data-text="light">
          <FAQsection />
        </div> */}
      </div>

      {/* <GlassSurface
        displace={15}
        distortionScale={-150}
        redOffset={5}
        greenOffset={15}
        blueOffset={25}
        brightness={60}
        opacity={0.8}
        mixBlendMode="screen"
      >
        <span>Advanced Glass Distortion</span>
      </GlassSurface> */}
      {/* <div
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          backgroundColor: "#000000",
        }}
      >
        <div className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-black/10 backdrop-blur-[1000px] z-100">

        </div>
        <div className="relative w-[100vw] h-[100vh] -rotate-180 z-10 border">
          <Aurora />
        </div>
        <div className="absolute top-0 w-[100vw] h-[100vh] z-50">
          <Aurora />
        </div>
      </div> */}
      {/* <div className="backdropShape pointer-events-none"></div> */}
      {/* <div className="absolute top-0 left-0 w-full h-full z-10 opacity-10">
        <Image src="/assets/gradient.png" alt="" fill className="object-contain"/>
        </div> */}

      {/* <div className="w-full h-screen relative bg-white text-black">
        <GlassSurface
          width={300}
          height={200}
          borderRadius={24}
          className="my-custom-class"
        >
          <h2>Glass Surface Content</h2>
        </GlassSurface>
        <GlassSurface
          displace={15}
          distortionScale={-150}
          redOffset={5}
          greenOffset={15}
          blueOffset={25}
          brightness={60}
          opacity={0.8}
          mixBlendMode="screen"
        >
          <span>Advanced Glass Distortion</span>
        </GlassSurface>
      </div> */}
    </>
  );
}
