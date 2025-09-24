import Image from "next/image";
import Link from "next/link";

export default function Navbar(params) {
  return (
    <nav className="w-full absolute p-10 flex-between z-40">
      <div className="relative flex-center gap-12">
        <div className="relative w-24 h-[30px]">
          <Image
            src="/assets/fyuze-logo.svg"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-[1px] h-[26px] relative bg-white"></div>
        <div className="flex-between gap-10 relative">
          <Link
            href="/"
            className="text-xs font-[300] leading-[100%] uppercase"
          >
            How it works
          </Link>
          <div className="relative w-[2px] h-[2px] rounded-full bg-white"></div>
          <Link
            href="/"
            className="text-xs font-[300] leading-[100%] uppercase"
          >
            features
          </Link>
          <div className="relative w-[2px] h-[2px] rounded-full bg-white"></div>
          <Link
            href="/"
            className="text-xs font-[300] leading-[100%] uppercase"
          >
            pricing
          </Link>
          <div className="relative w-[2px] h-[2px] rounded-full bg-white"></div>
          <Link
            href="/"
            className="text-xs font-[300] leading-[100%] uppercase"
          >
            about
          </Link>
        </div>
      </div>
      <div className="relative flex-center gap-3 ">
        <div className="w-[30px] h-[30px] relative overflow-hidden rounded-full">
          <Image
            src="/assets/profile.png"
            alt="logo"
            fill
            className="object-cover"
          />
        </div>
        <p className="font-[500] text-base leading-[100%]">Jenny Wilson</p>
      </div>
    </nav>
  );
}
