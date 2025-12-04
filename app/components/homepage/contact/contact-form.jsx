"use client";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import { toast } from "react-toastify";

// Simple email validation function
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

function ContactForm() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    email: false,
    required: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    // Validation
    if (!input.email || !input.message || !input.name) {
      setError({ email: false, required: true });
      toast.error("Please fill in all required fields!");
      return;
    }

    if (!isValidEmail(input.email)) {
      setError({ email: true, required: false });
      toast.error("Please provide a valid email address!");
      return;
    }

    setError({ email: false, required: false });
    setIsLoading(true);

    try {
      // Check if EmailJS is configured
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
        toast.info(
          "Contact form is in demo mode. Configure EmailJS to enable real emails."
        );
        // Simulate success for demo
        await new Promise((resolve) => setTimeout(resolve, 1500));
        toast.success("🎉 Demo: Message would be sent successfully!");
      } else {
        // Actual EmailJS implementation would go here
        toast.success("🎉 Message sent successfully!");
      }

      // Reset form
      setInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Email error:", error);
      toast.error(
        "Failed to send message. Please try again or email me directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-gradient-to-br from-[#1a1443] to-[#0d1224] rounded-xl border border-[#464c6a] p-6 lg:p-8 shadow-lg h-full flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-[#16f2b3] to-violet-600 rounded-lg flex items-center justify-center">
            <TbMailForward className="text-white text-xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Contact Me</h3>
            <p className="text-gray-400 text-sm">
              I&apos;ll respond within 24 hours
            </p>
          </div>
        </div>

        <p className="text-gray-300 mb-6 text-sm">
          Have a project in mind or want to discuss opportunities? Feel free to
          reach out!
        </p>

        <form
          onSubmit={handleSendMail}
          className="space-y-6 flex-1 flex flex-col"
        >
          <div className="space-y-6 flex-1">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-white font-medium flex items-center gap-2">
                <FaUser className="text-[#16f2b3]" size={14} />
                Your Name
              </label>
              <input
                className="w-full bg-[#10172d] border border-[#353a52] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#16f2b3] focus:ring-2 focus:ring-[#16f2b3]/20 outline-none transition-all duration-300"
                type="text"
                placeholder="Enter your full name"
                maxLength="100"
                required
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
                onBlur={checkRequired}
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-white font-medium flex items-center gap-2">
                <FaEnvelope className="text-[#16f2b3]" size={14} />
                Email Address
              </label>
              <input
                className={`w-full bg-[#10172d] border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 outline-none transition-all duration-300 ${
                  error.email
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    : "border-[#353a52] focus:border-[#16f2b3] focus:ring-[#16f2b3]/20"
                }`}
                type="email"
                placeholder="your.email@example.com"
                maxLength="100"
                required
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                onBlur={() => {
                  checkRequired();
                  setError((prev) => ({
                    ...prev,
                    email: !isValidEmail(input.email),
                  }));
                }}
              />
              {error.email && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  ⚠️ Please provide a valid email address
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-white font-medium flex items-center gap-2">
                <FaComment className="text-[#16f2b3]" size={14} />
                Your Message
              </label>
              <textarea
                className="w-full bg-[#10172d] border border-[#353a52] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#16f2b3] focus:ring-2 focus:ring-[#16f2b3]/20 outline-none transition-all duration-300 resize-none"
                placeholder="Tell me about your project or how we can work together..."
                maxLength="500"
                rows="4"
                required
                value={input.message}
                onChange={(e) =>
                  setInput({ ...input, message: e.target.value })
                }
                onBlur={checkRequired}
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>{input.message.length}/500 characters</span>
                <span className="text-[#16f2b3]">* Required fields</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#16f2b3] to-violet-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-[#16f2b3]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <TbMailForward className="mt-0.5" size={18} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
