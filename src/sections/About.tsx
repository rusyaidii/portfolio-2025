import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

import VueIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NestIcon from "@/assets/icons/html5.svg";
import DotNetIcon from "@/assets/icons/css3.svg";
import RedisIcon from "@/assets/icons/chrome.svg";
import NatsIcon from "@/assets/icons/github.svg";
import MongoIcon from "@/assets/icons/square-js.svg";
import { TechIcon } from "@/components/TechIcon";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "VueJS",
    iconType: VueIcon,
  },
  {
    title: "ReactJS",
    iconType: ReactIcon,
  },
  {
    title: "NestJS",
    iconType: NestIcon,
  },
  {
    title: ".NET",
    iconType: DotNetIcon,
  },
  {
    title: "Redis",
    iconType: RedisIcon,
  },
  {
    title: "NATS",
    iconType: NatsIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    top: "5%",
    left: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    top: "5%",
    left: "50%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    top: "35%",
    left: "10%",
  },
  {
    title: "Music",
    emoji: "🎶",
    top: "40%",
    left: "35%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    top: "45%",
    left: "70%",
  },
  {
    title: "Reading",
    emoji: "📚",
    top: "65%",
    left: "5%",
  },
  {
    title: "Dancing",
    emoji: "💃",
    top: "70%",
    left: "45%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-16 lg:py-28">
      <div className="container">
        <SectionHeader
          category="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective"
              />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image
                  src={bookImage}
                  alt="Atomic Habits book cover"
                  className=""
                />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <div>
                <ToolboxItems items={toolboxItems} />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6"
                  itemsWrapperClassName="-translate-x-1/2"
                />
              </div>
            </Card>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Discover the activities that fuel my creativity and passion."
                className="px-6 py-6"
              />

              <div className="relative flex-1">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute"
                    style={{
                      top: hobby.top,
                      left: hobby.left,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map of the world"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  src={smileMemoji}
                  alt="Smiling Memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
