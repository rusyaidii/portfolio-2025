"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

import Image from "next/image";
import { motion } from "framer-motion";

import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map-3.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

import VueIcon from "@/assets/icons/vuejs.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NestIcon from "@/assets/icons/nestjs.svg";
import DotNetIcon from "@/assets/icons/dotnet.svg";
import RedisIcon from "@/assets/icons/redis.svg";
import NatsIcon from "@/assets/icons/nats-io.svg";
import MongoIcon from "@/assets/icons/mongodb.svg";
import GraphQLIcon from "@/assets/icons/graphql.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { useRef } from "react";

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
    title: "GraphQL",
    iconType: GraphQLIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoIcon,
  },
];

const hobbies = [
  {
    title: "Tech Exploration",
    emoji: "🧪",
    top: "5%",
    left: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    top: "5%",
    left: "60%",
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
  {
    title: "Cooking",
    emoji: "🍳",
    top: "25%",
    left: "55%",
  },
];

export const AboutSection = () => {
  const dragConstraints = useRef(null);

  return (
    <div className="py-16 lg:py-28" id="about">
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
                <ToolboxItems
                  items={toolboxItems}
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6"
                  itemsWrapperClassName="animate-move-right [animation-duration:15s]"
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

              <div className="relative flex-1" ref={dragConstraints}>
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    className="inline-flex items-center gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute"
                    style={{
                      top: hobby.top,
                      left: hobby.left,
                    }}
                    drag
                    dragConstraints={dragConstraints}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map of the world"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
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
