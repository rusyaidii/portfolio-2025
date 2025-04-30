import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative overflow-x-clip z-0" id="home">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-20">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="size-[1420px] hero-ring"></div>
        <div className="size-[1620px] hero-ring"></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30"
          shouldSpin
          spinDuration="8"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32"
          shouldSpin
          spinDuration="8"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34">
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36"
          shouldSpin
          spinDuration="8"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38"
          shouldSpin
          spinDuration="6"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40"
          shouldSpin
          spinDuration="6"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="42"
          shouldSpin
          spinDuration="8"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="44">
          <div className="size-3 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="46"
          shouldSpin
          spinDuration="6"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="48">
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Me peeking behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Currently seeking new challenges
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Enthusiastic Full Stack Developer
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Hi, I&apos;m <span className="font-semibold text-white">Rusyaidi</span> –
            Orbiting between frontend magic and backend wizardry 🧙‍♂️, I build
            clean, scalable code and explore the far reaches of tech to solve
            real-world problems.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a
            className="inline-flex items-center gap-2 border rounded-xl border-white/15 px-6 h-12"
            href="#experience"
          >
            <span className="font-semibold">Explore My Experience</span>
            <ArrowDown className="size-4" />
          </a>
          <a
            className="inline-flex items-center gap-2 border rounded-xl border-white bg-white text-gray-900 px-6 h-12"
            href="https://wasap.my/60132711014"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
};
