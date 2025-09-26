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
import LiquidEther from "@/components/LiquidEther";

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
      <SplashCursor />
      <div className="relative w-full">
        <div className="section" data-text="light">
          <HeroComponent />
        </div>
        <div className="section" data-text="dark">
          <AboutComponent />
        </div>
        <div className="section" data-text="dark">
          <SocialPlatformsComponent />
        </div>
        <div className="section" data-text="light">
          <FAQsection />
        </div>
      </div>
    </>
  );
}
