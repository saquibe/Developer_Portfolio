import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from "./contact-form";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      {/* Side Contact Label */}
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
        {/* Contact Form - Now with matching height */}
        <div className="flex flex-col h-full">
          <ContactForm />
        </div>

        {/* Get In Touch Section - Same height as Contact Form */}
        <div className="flex flex-col h-full">
          <div className="bg-gradient-to-br from-[#1a1443] to-[#0d1224] rounded-xl border border-[#464c6a] p-6 lg:p-8 shadow-lg h-full flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

            {/* Contact Information */}
            <div className="space-y-6 mb-8 flex-1">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[#16f2b3]/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#16f2b3] to-violet-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MdAlternateEmail className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">{personalData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[#16f2b3]/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#16f2b3] to-violet-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaPhone className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-medium">{personalData.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[#16f2b3]/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#16f2b3] to-violet-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CiLocationOn className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">
                    {personalData.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-auto">
              <h4 className="text-white font-semibold mb-4 text-center">
                Connect With Me
              </h4>
              <div className="flex justify-center gap-4 flex-wrap">
                {[
                  {
                    href: personalData.github,
                    icon: IoLogoGithub,
                    label: "GitHub",
                  },
                  {
                    href: personalData.linkedIn,
                    icon: BiLogoLinkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: personalData.twitter,
                    icon: FaXTwitter,
                    label: "Twitter",
                  },
                  {
                    href: personalData.stackOverflow,
                    icon: FaStackOverflow,
                    label: "Stack Overflow",
                  },
                  {
                    href: personalData.facebook,
                    icon: FaFacebook,
                    label: "Facebook",
                  },
                  {
                    href: `mailto:${personalData.email}`,
                    icon: BiLogoGmail,
                    label: "Email",
                  },
                ].map((social, index) => (
                  <Link
                    key={index}
                    target="_blank"
                    href={social.href}
                    className="group flex flex-col items-center gap-1"
                    title={social.label}
                  >
                    <div className="w-12 h-12 bg-[#25213b] rounded-lg flex items-center justify-center group-hover:bg-[#16f2b3] transition-all duration-300 group-hover:scale-110">
                      <social.icon className="text-white text-xl" />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-[#16f2b3] transition-colors duration-300">
                      {social.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
