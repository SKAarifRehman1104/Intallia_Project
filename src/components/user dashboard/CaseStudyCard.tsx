
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CaseStudyCardProps {
  icon: string;
  title: string;
  tools: string;
  backgroundImage: string;
  waveImage: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  icon,
  title,
  tools,
  backgroundImage,
}) => {
  return (
    <article className="relative h-full group">
      {/* Main card with rounded corners */}
      <div 
        className="bg-white shadow-sm hover:shadow-md transition-shadow h-full overflow-hidden rounded-[20px]"
      >
        {/* Arrow icon in top right corner */}
        <div className="absolute top-0 right-0 z-10">
          <div 
            className="bg-[#1D1D1F] p-3 flex items-center justify-center"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "0 20px 0 12px",
            }}
          >
            <ArrowUpRight className="text-white w-6 h-6" />
          </div>
        </div>
        
        <div className="flex flex-col h-full">
          {/* Content area */}
          <div className="flex flex-col p-6 pb-4 flex-grow">
            {/* Status badge */}
            <div className="mb-5">
              <div className="bg-red-50 text-red-500 font-medium text-xs py-1.5 px-4 rounded-full inline-block">
                Non - Attempted
              </div>
            </div>
            
            <h3 className="text-[#1D1D1F] text-xl font-semibold leading-tight mb-3 line-clamp-2">
              {title}
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              {tools}
            </p>
            <div className="mt-auto">
              <Button className="bg-[#1D1D1F] hover:bg-black text-white rounded-md py-2 px-5 text-sm font-medium">
                Start Now!
              </Button>
            </div>
          </div>

          {/* Background image container with fixed height */}
          <div className="h-52 w-full overflow-hidden">
            <img
              src={backgroundImage}
              alt="Case study background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  );
};
