// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Image Section */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#16f2b3] to-[#1a1443] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-[#1a1443] group-hover:border-[#16f2b3] transition-all duration-300 bg-gray-800">
              <Image
                src={personalData.profile}
                fill
                alt="Mohammad Saquib"
                className="object-contain grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-105 cursor-pointer"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-3 text-[#16f2b3] text-xl uppercase tracking-wider">
            Who I am?
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            Transforming Ideas Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16f2b3] to-[#1a1443]">
              Digital Reality
            </span>
          </h2>
          <p className="text-gray-200 text-sm lg:text-lg leading-relaxed lg:leading-loose">
            {personalData.description}
          </p>

          {/* Tech Stack Badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "JavaScript",
              "React",
              "Next.js",
              "Node.js",
              "MongoDB",
              "Express",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-[#1a1443] text-[#16f2b3] rounded-full border border-[#16f2b3] hover:bg-[#16f2b3] hover:text-[#1a1443] transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
