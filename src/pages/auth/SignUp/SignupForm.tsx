import Image from "@/assets/india-flag-icon 1.svg";
import { Link } from "react-router-dom";

const SignupForm = ({onSubmit}) => {


  return (
    <div className="w-full md:w-1/2 pt-[6%] flex justify-center bg-[#FFFFFF]">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-bold mb-2">Sign Up</h2>
        <p className="text-gray-500 mb-6 font-plusJakarta">
          Hello! Let’s get started and sharpen your skills with some
          expert-level quizzes!
        </p>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <span className="mr-2 flex gap-2">
                <img src={Image} alt="" /> +91
              </span>
              <input
                type="text"
                placeholder="1234 5678"
                className="flex-1 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="*******"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="*******"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-center md:justify-end items-center"
          >
            <button
              type="submit"
              className="w-[300px] h-[50px] py-2 text-center text-white rounded-md bg-gradient-to-r from-cyan-400 to-green-500 hover:opacity-90 transition mt-5 "
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
