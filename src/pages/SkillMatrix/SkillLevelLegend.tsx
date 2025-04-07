
import React from "react";

export const SkillLevelLegend = () => {
  return (
    <div className="flex items-center gap-5 flex-wrap justify-between w-full max-md:max-w-full ">
      <div className="flex flex-col w-full max-w-[600px]">
        <div className="flex justify-between text-[17px] text-[#444446] font-normal mb-2">
          <span>Basic</span>
          <span>Intermediate</span>
          <span>Advanced</span>
          <span>Expert</span>
        </div>
        <div className="flex items-center gap-3 w-full">
          <div className="bg-[rgba(5,154,243,1)] flex w-[100px] h-[21px] rounded-[30px]" />
          <div className="bg-[rgba(20,196,199,1)] flex w-[150px] h-[21px] rounded-[30px]" />
          <div className="bg-[rgba(29,221,175,1)] flex w-[200px] h-[21px] rounded-[30px]" />
          <div className="bg-[rgba(39,246,151,1)] flex w-[250px] h-[21px] rounded-[30px]" />
        </div>
      </div>
    </div>
  );
};
