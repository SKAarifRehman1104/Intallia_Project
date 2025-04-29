import { useNavigate } from "react-router-dom";
import React from "react";
import { Header } from "../../components/login/Header";
import { ProfileSidebar } from "../../components/login/ProfileSidebar";
import { PersonalDetailsForm } from "../../components/login/PersonalDetailsForm";
import { ResumeUpload } from "../../components/login/ResumeUpload";
import { CustomButton } from "../../components/login/CustomButton";

const UserDetails: React.FC = () => {

  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/education');
  };

  return (

    <div className="bg-white overflow-hidden pb-[90px] max-md:pb-[60px]">
      <Header />
      <div className="flex w-full max-w-[1388px] flex-col ml-[129px] mt-[55px] max-md:max-w-full max-md:mt-10">
        <div className="self-stretch max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[28%] max-md:w-full max-md:ml-0">
              <ProfileSidebar />
            </div>
            <div className="w-[72%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
                <div className="text-center text-[34px] font-semibold leading-none tracking-[0.37px] bg-clip-text text-[#18d3c2] mb-2">
                  Let's get Started
                </div>
                <PersonalDetailsForm />
                <ResumeUpload />
                <div className="max-w-xl px-4 mt-6">
                  <div className="flex w-full justify-end gap-4 max-md:justify-start max-md:gap-3">
                    <CustomButton
                      variant="secondary"
                      icon="https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/4588e5d855995251e91d3138e1d529d4344bc5cf?placeholderIfAbsent=true"
                    >
                      Skip
                    </CustomButton>
                    <CustomButton
                      variant="primary"
                      icon="https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/516b62a891fdb1da75f19b4b1a830decfdfabf5b?placeholderIfAbsent=true"
                      onClick={handleNext}
                    >
                      Next
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
