// @flow strict
import Link from "next/link";
import { FaArrowRight, FaPenNib, FaDev } from "react-icons/fa";
import BlogCard from "./blog-card";

function Blog({ blogs }) {
  return (
    <div
      id="blogs"
      className="relative z-50 border-t my-20 lg:my-32 border-[#25213b]"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>
        <div className="w-80 h-80 bg-[#16f2b3] rounded-full absolute -bottom-40 -right-40 filter blur-3xl opacity-10"></div>
        <div className="w-80 h-80 bg-violet-500 rounded-full absolute -top-40 -left-40 filter blur-3xl opacity-10"></div>
      </div>

      {/* Top border line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section Header */}
      <div className="flex justify-center my-8 lg:py-12">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-3 px-6 text-xl rounded-md flex items-center gap-3">
            <FaPenNib className="text-[#16f2b3]" />
            Latest Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Section Description */}
      <div className="text-center mb-12">
        <p className="text-gray-400 text-lg max-w-3xl mx-auto px-4 leading-relaxed">
          Sharing my knowledge and experiences through technical writing.
          Explore my latest articles on web development, programming, and
          technology.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {blogs.slice(0, 6).map(
          (blog, i) =>
            blog?.cover_image && (
              <div
                key={i}
                className="transform transition-all duration-500 hover:scale-[1.02]"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <BlogCard blog={blog} />
              </div>
            )
        )}
      </div>

      {/* Stats & CTA Section */}
      <div className="text-center">
        {/* Blog Stats */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-6 bg-[#1a1443] px-8 py-4 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-[#16f2b3] font-bold text-lg">
                {blogs.length}+
              </span>
              <span>Articles Published</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-violet-400 font-bold text-lg">
                {blogs.reduce(
                  (acc, blog) => acc + blog.public_reactions_count,
                  0
                )}
                +
              </span>
              <span>Total Reactions</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#16f2b3] to-violet-600 px-8 py-4 text-center text-sm font-bold uppercase tracking-wider text-white no-underline transition-all duration-300 ease-out hover:gap-4 hover:shadow-2xl hover:shadow-[#16f2b3]/30"
          role="button"
          href="https://dev.to/saquibe"
          target="_blank"
        >
          <FaDev size={18} />
          <span>View All Posts on Dev.to</span>
          <FaArrowRight
            className="group-hover:translate-x-1 transition-transform duration-300"
            size={16}
          />
        </Link>
      </div>

      {/* Bottom border line */}
      <div className="flex justify-center translate-y-[1px] mt-16">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
    </div>
  );
}

export default Blog;
