import React from "react";

export const ProfileSidebar: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-center text-center w-full px-10 py-[35px] rounded-[20px] max-md:mt-10 max-md:px-5 border-1">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/8c0cc0efc6952f6b96f3fbec5004024d9083cff3?placeholderIfAbsent=true"
        alt="Complete Profile"
        className="aspect-[1.34] object-contain w-full self-stretch"
      />
      <div className="text-[#242426] text-[22px] font-semibold leading-none tracking-[0.35px] mt-7">
        Complete your profile
      </div>
      <div className="text-[#7C7C80] text-[17px] font-normal leading-[22px] tracking-[-0.41px] w-[248px] mt-3.5">
        Please complete your profile to help us match you better.
      </div>
    </div>
  );
};