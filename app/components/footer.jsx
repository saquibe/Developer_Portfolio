// @flow strict
import Link from "next/link";
import { CgGitFork } from "react-icons/cg";
import { IoStar, IoHeart } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative border-t bg-gradient-to-t from-[#0d1224] to-[#1a1443] border-[#353951] text-white">
      {/* Enhanced Top Gradient Line */}
      <div className="flex justify-center -z-40">
        <div className="absolute top-0 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent"></div>
      </div>

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Section - Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <p className="text-sm text-gray-300">
              © {currentYear} Crafted with{" "}
              <span className="inline-flex items-center text-red-500 mx-1">
                <IoHeart className="animate-pulse" size={14} />
              </span>{" "}
              by{" "}
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/saquibe/"
                className="text-[#16f2b3] hover:text-white font-medium transition-colors duration-300 ml-1"
              >
                Mohammad Saquib
              </Link>
            </p>

            {/* Additional Links */}
            <div className="hidden sm:flex items-center gap-4 text-xs text-gray-400">
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <Link
                href="#home"
                className="hover:text-[#16f2b3] transition-colors duration-300"
              >
                Home
              </Link>
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <Link
                href="#contact"
                className="hover:text-[#16f2b3] transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Middle Section - Social Links */}
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/saquibe/"
              className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-[#16f2b3] hover:border-[#16f2b3] hover:scale-110 transition-all duration-300 group"
              title="LinkedIn"
            >
              <FaLinkedin
                className="text-white group-hover:text-white"
                size={16}
              />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/saquibe"
              className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-[#16f2b3] hover:border-[#16f2b3] hover:scale-110 transition-all duration-300 group"
              title="GitHub"
            >
              <FaGithub
                className="text-white group-hover:text-white"
                size={16}
              />
            </Link>
          </div>

          {/* Right Section - GitHub Actions */}
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href="https://github.com/saquibe/Developer_Portfolio"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-[#16f2b3] hover:border-[#16f2b3] hover:scale-105 transition-all duration-300 group"
            >
              <IoStar
                className="text-yellow-400 group-hover:text-white"
                size={16}
              />
              <span className="text-sm font-medium">Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/saquibe/Developer_Portfolio/fork"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-[#16f2b3] hover:border-[#16f2b3] hover:scale-105 transition-all duration-300 group"
            >
              <CgGitFork
                className="text-blue-400 group-hover:text-white"
                size={16}
              />
              <span className="text-sm font-medium">Fork</span>
            </Link>
          </div>
        </div>

        {/* Bottom Section - Additional Info */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>
              Built with <span className="text-[#16f2b3]">Next.js</span>,{" "}
              <span className="text-[#16f2b3]">Tailwind CSS</span>, and{" "}
              <span className="text-[#16f2b3]">React</span>
            </p>
            <p className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for new opportunities
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-4 left-4 opacity-20">
          <div className="w-2 h-2 bg-[#16f2b3] rounded-full animate-ping"></div>
        </div>
        <div className="absolute bottom-4 right-4 opacity-20">
          <div className="w-2 h-2 bg-violet-500 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
