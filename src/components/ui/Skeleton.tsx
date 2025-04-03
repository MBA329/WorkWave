import React from "react";

const SkeletonJobListing: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md relative animate-pulse">
      <div className="p-4">
        {/* Job Type */}
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>

        {/* Job Title */}
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-6"></div>

        {/* Job Description */}
        <div className="space-y-2 mb-5">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>

        {/* Salary */}
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>

        {/* Divider */}
        <div className="border border-gray-100 mb-5"></div>

        {/* Location and Button */}
        <div className="flex flex-coljustify-between mb-4">
          {/* Location */}
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>

          {/* Button */}
          <div className="h-[36px] bg-gray-300 rounded-lg w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonJobListing;