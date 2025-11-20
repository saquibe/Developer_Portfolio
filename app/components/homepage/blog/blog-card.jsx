// @flow strict
import { timeConverter } from "@/utils/time-converter";
import Image from "next/image";
import Link from "next/link";
import { BsHeartFill, BsBookmark, BsShare } from "react-icons/bs";
import { FaCommentAlt, FaEye, FaArrowRight } from "react-icons/fa";

function BlogCard({ blog }) {
  return (
    <div className="group relative bg-gradient-to-br from-[#1b203e] to-[#1a1443] border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-[#16f2b3]/10 hover:scale-[1.02]">
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#16f2b3]/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

      {/* Image Container */}
      <div className="h-48 lg:h-56 w-auto cursor-pointer overflow-hidden relative">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1920}
          alt={blog.title}
          className="h-full w-full group-hover:scale-110 transition-all duration-500 object-cover"
        />
        {/* Image Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b203e] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>

        {/* Reading Time Badge */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
          {`${blog.reading_time_minutes} min read`}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col h-64">
        {/* Meta Information */}
        <div className="flex justify-between items-center text-[#16f2b3] text-sm mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#16f2b3] rounded-full animate-pulse"></span>
            <p className="text-xs font-medium">
              {timeConverter(blog.published_at)}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1 text-xs bg-[#16f2b3]/10 px-2 py-1 rounded">
              <BsHeartFill className="text-red-400" size={12} />
              <span>{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 && (
              <p className="flex items-center gap-1 text-xs bg-violet-500/10 px-2 py-1 rounded">
                <FaCommentAlt className="text-blue-400" size={12} />
                <span>{blog.comments_count}</span>
              </p>
            )}
          </div>
        </div>

        {/* Title */}
        <Link target="_blank" href={blog.url}>
          <h3 className="mb-3 cursor-pointer text-lg font-bold text-white line-clamp-2 group-hover:text-[#16f2b3] transition-colors duration-300 leading-tight">
            {blog.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-[#d3d8e8] line-clamp-3 mb-4 flex-1 leading-relaxed">
          {blog.description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <Link target="_blank" href={blog.url}>
            <button className="group/btn flex items-center gap-2 bg-gradient-to-r from-[#16f2b3] to-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[#16f2b3]/30 transition-all duration-300 hover:gap-3">
              <span>Read More</span>
              <FaArrowRight
                className="group-hover/btn:translate-x-1 transition-transform duration-300"
                size={14}
              />
            </button>
          </Link>

          {/* Additional Actions */}
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
              <BsBookmark
                className="text-gray-400 hover:text-yellow-400"
                size={14}
              />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
              <BsShare
                className="text-gray-400 hover:text-[#16f2b3]"
                size={14}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Tag/Category Badge */}
      {blog.tag_list && blog.tag_list.length > 0 && (
        <div className="absolute top-3 left-3">
          <span className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium capitalize">
            {blog.tag_list[0]}
          </span>
        </div>
      )}
    </div>
  );
}

export default BlogCard;
