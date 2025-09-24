import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans bg-orange-600 min-h-screen w-full relative flex-center gradient-1">
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
            <div className="relative w-full flex-between p-5 h-full input-gradient rounded-[28px] backdrop-blur-[10px] z-100">
              <div className="relative w-10 h-10 ">
                <Image
                  src="/assets/sparkle.svg"
                  alt="logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-center relative gap-3">
                <div className="relative flex-center p-3 rounded-2xl icon-gradient ">
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
            <div className="w-full absolute top-0 left-0 overflow-hidden custom-border h-full z-100"></div>
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
      <div className="absolute bottom-8 flex-center flex-col gap-1 ">
        <div className="w-[0.5px] h-[20px] relative bg-white"></div>
        <p className="text-xs text-center font-medium font-archivo leading-[100%] uppercase">
          Scroll to explore
        </p>
        <div className="w-[0.5px] h-[5px] relative bg-white"></div>
      </div>
      <div className="absolute w-11/12 h-[80vh] overflow-hidden">
        <div className="absolute left-[28.2vw] top-[35vh] w-[0.5px] h-[100px] gradient-2 z-10"></div>
        <div className="absolute left-0 top-[5vh] w-[0.5px] h-[255px] gradient-2"></div>
        <div className="absolute left-0 bottom-[5vh] w-[0.5px] h-[255px] gradient-2"></div>
        <div className="absolute left-[10vw] top-[20vh] w-[0.5px] h-[255px] gradient-2"></div>
        <div className="absolute left-[15vw] top-[10vh] w-[0.5px] h-[255px] gradient-2"></div>
        <div className="absolute left-[18vw] bottom-[8vh] w-[0.5px] h-[255px] gradient-2"></div>
        <div className="absolute left-[37.5vw] top-[4vh] w-[0.5px] h-[210px] gradient-2 z-10"></div>
        <div className="absolute left-[52vw] top-[7vh] w-[0.5px] h-[130px] gradient-2 z-1"></div>
        <div className="absolute left-[32vw] bottom-[5vh] w-[0.5px] h-[255px] gradient-2 z-1"></div>
        <div className="absolute left-[62.5vw] bottom-[7vh] w-[0.5px] h-[255px] gradient-2 z-1"></div>
        <div className="absolute left-[64vw] top-[34vh] w-[0.5px] h-[100px] gradient-2 z-1"></div>
        <div className="absolute left-[64vw] top-[29.5vh] w-[0.5px] h-[16px] gradient-2 z-1"></div>
        <div className="absolute left-[72vw] top-[3vh] w-[0.5px] h-[255px] gradient-2 z-1"></div>
        <div className="absolute left-[80vw] top-[45vh] w-[0.5px] h-[255px] gradient-2 z-1"></div>
        <div className="absolute right-0 top-[20vh] w-[0.5px] h-[255px] gradient-2 z-1"></div>
      </div>
    </div>
  );
}
