import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 lg:py-24 pt-12 lg:pt-20" id="contact">
      <div className="container">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 text-center md:text-left py-8 px-10 relative overflow-hidden z-10">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Open to New Opportunities
              </h2>
              <p className="text-sm md:text-base mt-2">
                If you have a project, role, or collaboration in mind, feel free
                to reach out. You can also download my CV to learn more about my
                background and experience.
              </p>
            </div>

            <div>
              <a
                href="/Muhammad-Rusyaidi-Mohd-Mizi_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Download My CV</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
