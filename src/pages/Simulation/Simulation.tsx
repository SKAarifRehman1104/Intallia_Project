import React from "react";
import { Header } from "./Header";
import { SearchBar } from "@/components/common/SearchBar";
import { SimulationGrid } from "@/pages/Simulation/SimulationGrid/SimulationGrid";
import { MainLayout } from "@/components/layout/MainLayout";

export const Simulation: React.FC = () => {
  return (
    <MainLayout>
        <div className="grow shrink-0 basis-0 w-fit mt-[39px] max-md:max-w-full">
      <div className="flex w-full items-start justify-between max-md:max-w-full">
        <Header />
        <SearchBar />
      </div>
      <SimulationGrid />
    </div>
    </MainLayout>
  );
};
