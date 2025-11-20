// @flow strict
import Image from "next/image";
import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import lottieFile from "/public/lottie/study.json";

function Education() {
  return (
    <div
      id="education"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/section.svg"
          alt="Hero"
          width={1572}
          height={795}
          className="absolute top-0 -z-10 opacity-60"
        />
        <div className="w-64 h-64 bg-[#16f2b3] rounded-full absolute -top-32 -right-32 filter blur-3xl opacity-10"></div>
        <div className="w-64 h-64 bg-violet-500 rounded-full absolute -bottom-32 -left-32 filter blur-3xl opacity-10"></div>
      </div>

      {/* Top border line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section Header */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Education
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Section Description */}
      <div className="text-center mb-12">
        <p className="text-gray-400 text-base max-w-2xl mx-auto px-4">
          My academic journey through computer applications and foundational
          education
        </p>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Lottie Animation */}
          <div className="flex justify-center items-start">
            <div className="w-full h-full max-w-md">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#16f2b3] to-[#1a1443] hidden lg:block"></div>

            <div className="flex flex-col gap-8">
              {educations.map((education, index) => (
                <GlowCard
                  key={education.id}
                  identifier={`education-${education.id}`}
                >
                  <div className="p-4 relative">
                    {/* Background Pattern */}
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-60"
                    />

                    {/* Timeline Dot */}
                    <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
                      <div
                        className={`w-4 h-4 rounded-full ${
                          index === 0
                            ? "bg-[#16f2b3] ring-4 ring-[#16f2b3]/20"
                            : index === 1
                            ? "bg-violet-500 ring-4 ring-violet-500/20"
                            : "bg-amber-500 ring-4 ring-amber-500/20"
                        } ring-[#1a1443]`}
                      ></div>
                    </div>

                    <div className="flex items-start gap-6">
                      {/* Icon with different colors based on level */}
                      <div
                        className={`transition-all duration-300 hover:scale-110 mt-1 flex-shrink-0 ${
                          index === 0
                            ? "text-[#16f2b3]"
                            : index === 1
                            ? "text-violet-500"
                            : "text-amber-500"
                        }`}
                      >
                        <FaGraduationCap size={32} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        {/* Degree Level Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={`text-xs px-3 py-1 rounded-full font-medium ${
                              index === 0
                                ? "bg-[#16f2b3]/20 text-[#16f2b3]"
                                : index === 1
                                ? "bg-violet-500/20 text-violet-400"
                                : "bg-amber-500/20 text-amber-400"
                            }`}
                          >
                            {index === 0
                              ? "MASTERS"
                              : index === 1
                              ? "BACHELORS"
                              : "INTERMEDIATE"}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                            <FaCalendarAlt size={10} />
                            <span>{education.duration}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-white mb-2">
                          {education.title}
                        </h3>

                        {/* Institution */}
                        <p className="text-gray-300 font-medium mb-3">
                          {education.institution}
                        </p>

                        {/* Location based on institution */}
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <FaMapMarkerAlt size={12} />
                          <span>
                            {education.institution.includes("Lucknow")
                              ? "Lucknow, Uttar Pradesh"
                              : education.institution.includes("Mau")
                              ? "Mau, Uttar Pradesh"
                              : "Gorakhpur, Uttar Pradesh"}
                          </span>
                        </div>

                        {/* Progress indicator for current/most recent */}
                        {index === 0 && (
                          <div className="mt-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#16f2b3] rounded-full animate-pulse"></div>
                            <span className="text-xs text-[#16f2b3]">
                              Most Recent
                            </span>
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

      {/* Education Journey Summary */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-4 bg-[#1a1443] px-6 py-3 rounded-2xl border border-white/10">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="text-[#16f2b3] font-bold">
              {educations.length}
            </span>
            <span>Educational Milestones</span>
          </div>
          <div className="w-px h-6 bg-white/20"></div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="text-violet-400 font-bold">7+</span>
            <span>Years of Learning</span>
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      {/* <div className="flex justify-center translate-y-[1px] mt-12">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div> */}
    </div>
  );
}

export default Education;
