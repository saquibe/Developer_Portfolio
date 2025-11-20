// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from "/public/lottie/code.json";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Work Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#16f2b3] to-[#1a1443] hidden lg:block"></div>

            <div className="flex flex-col gap-8">
              {experiences.map((experience, index) => (
                <GlowCard
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                >
                  <div className="p-4 relative">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-60"
                    />

                    {/* Timeline dot */}
                    <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
                      <div className="w-4 h-4 rounded-full bg-[#16f2b3] ring-4 ring-[#1a1443]"></div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="text-[#16f2b3] transition-all duration-300 hover:scale-110 hover:text-white mt-1">
                        <BsPersonWorkspace size={32} />
                      </div>

                      <div className="flex-1">
                        {/* Company and Duration */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                          <p className="text-lg font-bold text-white uppercase tracking-wide">
                            {experience.title}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-[#16f2b3] bg-[#1a1443] px-3 py-1 rounded-full">
                            <FaCalendarAlt size={12} />
                            <span>{experience.duration}</span>
                          </div>
                        </div>

                        {/* Company Name */}
                        <p className="text-base text-gray-300 font-medium mb-4">
                          {experience.company}
                        </p>

                        {/* Description if available */}
                        {experience.description && (
                          <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                            {experience.description}
                          </p>
                        )}

                        {/* Tech Stack for current role */}
                        {(experience.id === 1 || experience.id === 2) && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {[
                              "JavaScript",
                              "TypeScript",
                              "React",
                              "Next.js",
                              "Node.js",
                              "MongoDB",
                              "Express",
                              "Tailwind CSS",
                            ].map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-[#1a1443] text-[#16f2b3] rounded-full border border-[#16f2b3]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
