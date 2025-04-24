import myImage from "@/assets/Frame 25.svg";
import newImage from "@/assets/Hired-bro 1.svg";
import React, { useRef } from "react";
import { Link } from "react-router-dom";


const Verify = () => {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <div className="w-[52%] pt-[120px] pl-24 bg-[#FFFFFF] flex justify-center ">
        <div className="max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-2 ">
            Verify
            <span className="font-semibold bg-gradient-to-l from-[#06B2E1] to-[#09CE88] text-transparent bg-clip-text ml-2">
              OTP
            </span>
          </h2>
          <p className="text-sm text-gray-600  mr-5">
            Enter the 6 digit verification code that has been sent to your email
          </p>
          <p className="text-sm font-medium text-gray-800 text-start">
            example@hello.com
          </p>
          <p className="text-[9px] font-medium text-gray-800 text-start mt-5 leading-[300%]">
            Enter OTP
          </p>

          <form className="space-y-6">
            <div className="flex justify-between gap-2 mb-4">
              {Array(6)
                .fill("none")
                .map((_, i) => (
                  <input
                    key={i}
                    type="text"
                    max-Length="1"
                    className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => handleChange(e, i)}
                    ref={(el) => (inputRefs.current[i] = el)}
                  />
                ))}
            </div>
            <Link to="">
              <button
                type="submit"
                className="w-[60%] ml-[40%] py-3 text-white rounded-xl bg-gradient-to-r from-cyan-500 to-green-400 hover:opacity-90 transition"
              >
                Verify OTP
              </button>
            </Link>
          </form>

          <p className="mt-10">
            Haven’t received your OTP yet?{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Resend
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Verify;
