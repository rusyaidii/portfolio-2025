import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLink = [
  {
    title: "GitHub",
    link: "https://github.com/rusyaidii",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/rusyaidii/",
  },
  {
    title: "Behance",
    link: "https://www.behance.net/rusyaidii",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="relative">
        <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
        <div className="container">
          <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row items-center md:justify-between gap-8">
            <p className="text-white/40 font-extralight">
              &copy; 2025. Rusyaidi &bull; All rights reserved.
            </p>

            <nav className="flex flex-col md:flex-row items-center gap-8">
              {footerLink.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5"
                >
                  <span className="font-semibold">{item.title}</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
