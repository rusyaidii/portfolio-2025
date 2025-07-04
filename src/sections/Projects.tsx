import lapasarLandingPage from "@/assets/images/lapasar-landing-page.png";
import mywamLandingPage from "@/assets/images/mywam-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Lapasar",
    yearStart: "June 2024",
    title: "Senior Full Stack Developer",
    description: [
      "Spearheaded development of a scalable B2B logistics platform using VueJS, NestJS, GraphQL, NATS, and Redis.",
      "Integrated secure Maybank Financial systems for seamless payment processing.",
      "Collaborated with cross-functional teams to align tech with business goals.",
      "Optimized performance using Redis caching and NATS messaging.",
      "Enhanced engineering processes by implementing modern best practices."
    ],
    link: "https://borong.lapasar.com/",
    image: lapasarLandingPage,
  },
  {
    company: "Mywam",
    yearStart: "April 2022",
    yearEnd: "May 2024",
    title: "Full Stack Developer",
    description: [
      "Developed 70+ Web APIs with C# .NET and built ReactJS frontends using Redux.",
      "Created reusable components for clean, maintainable code.",
      "Led development of major modules: Patient Transfer, QR Attendance, SSO integration, and more.",
      "Resolved critical customer issues, saving RM10,000 in subscriptions.",
      "Mentored 2 junior devs and managed Dockerize environments across dev and live servers."
    ],
    link: "https://xhealth.com.my/",
    image: mywamLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="experience">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
            Real-world Experience
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Professional Journey
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        Explore key roles where I built scalable applications, collaborated with teams, and delivered real-world results.
        </p>

        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="flex flex-col md:flex-row bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text gap-2 font-bold uppercase tracking-widest text-sm">
                    <span>{project.company}</span>
                  </div>
                  <span className="text-sm text-white/50">{`${project.yearStart} - ${project.yearEnd ?? 'Present'}`}</span>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.description.map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link} target="_blank">
                    <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white font-semibold text-gray-950 px-6 h-12 mt-8 w-full md:w-auto">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:max-w-none lg:w-auto"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
