// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Background Effects */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>
      <div className="w-[80px] h-[80px] bg-[#16f2b3] rounded-full absolute bottom-8 right-20 filter blur-2xl opacity-15"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Tech Stack
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Skills Counter */}
      <div className="text-center mb-8">
        <p className="text-gray-400 text-sm">
          <span className="text-[#16f2b3] font-bold text-lg">
            {skillsData.length}+
          </span>{" "}
          Technologies & Tools
        </p>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
          className="py-4"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-110 cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-gradient-to-br from-[#11152c] to-[#1a1443] shadow-2xl shadow-black/50 group-hover:shadow-violet-500/20 group-hover:border-[#16f2b3] transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent group-hover:via-[#16f2b3] transition-all duration-500" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-12 w-12 flex items-center justify-center bg-[#1a1443] rounded-lg group-hover:bg-[#16f2b3] group-hover:scale-110 transition-all duration-300">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={28}
                      height={28}
                      className="rounded-lg transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                  <p className="text-white text-sm font-medium group-hover:text-[#16f2b3] transition-colors duration-300">
                    {skill}
                  </p>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute -inset-2 bg-[#16f2b3] rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Second Marquee for opposite direction */}
      <div className="w-full mb-12">
        <Marquee
          gradient={false}
          speed={70}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
          className="py-4"
        >
          {skillsData
            .slice()
            .reverse()
            .map((skill, id) => (
              <div
                className="w-32 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-105 cursor-pointer"
                key={id}
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-lg shadow-black/30 group-hover:shadow-[#16f2b3]/10 group-hover:border-[#16f2b3] transition-all duration-500">
                  <div className="flex flex-col items-center justify-center gap-2 p-4">
                    <div className="h-8 w-8 flex items-center justify-center">
                      <Image
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={24}
                        height={24}
                        className="rounded-lg transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                    <p className="text-gray-300 text-xs group-hover:text-[#16f2b3] transition-colors duration-300">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
