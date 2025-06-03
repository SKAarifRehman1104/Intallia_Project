import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getScreen } from "@/axios/api";
import { SimulationCard } from "./SimulationCard";
import { AddSimulationCard } from "./AddSimulationCard";

export const SimulationGrid: React.FC = () => {
  const cardsPerRow = 5;

  const payload = {
    ScreenName: "JobSimulation",
    LookUpKey: "GetList",
    Filter1: "",
    Filter2: "",
    Filter3: "",
    Filter4: "",
    Filter5: ""
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["simulation-data"],
    queryFn: () => getScreen(payload),
    select: (data) => data?.LookupData || [], // extract LookupData
  });

  if (isLoading) return <div>Loading simulations...</div>;
  if (isError || !data) return <div>Failed to load simulations.</div>;

  console.log("Simulation data:", data);


  const simulationData = data;

  // Create chunks of simulation cards
  const chunks: JSX.Element[] = [];

  // First chunk includes AddSimulationCard + 4 cards
  chunks.push(
    <div
      key="row-0"
      className="flex items-start gap-[1rem] flex-wrap mt-5 max-md:max-w-full"
    >
      <AddSimulationCard />
      {simulationData.slice(0, 4).map((simulation, index) => (
        <SimulationCard
          key={`first-row-${index}`}
          id={simulation.SimulationId}
          title={simulation.Name}
          description={simulation.Description}
          createdDate={simulation.CreateDate}
          isGuided={simulation.Guided}
          isPaid={simulation.IsPaid}
        />
      ))}
    </div>
  );

  for (let i = 4; i < simulationData.length; i += cardsPerRow) {
    const rowCards = simulationData.slice(i, i + cardsPerRow);
    const rowIndex = Math.floor(i / cardsPerRow) + 1;

    chunks.push(
      <div
        key={`row-${rowIndex}`}
        className="flex items-start gap-[1rem] flex-wrap max-md:max-w-full"
      >
        {rowCards.map((simulation, index) => (
          <SimulationCard
            key={`row-${rowIndex}-card-${index}`}
            id={simulation.SimulationId}
            title={simulation.Name}
            description={simulation.Description}
            createdDate={simulation.CreateDate}
            isGuided={simulation.Guided}
            isPaid={simulation.IsPaid}
          />
        ))}

        {/* Fill layout if fewer than 5 cards */}
        {rowCards.length < cardsPerRow &&
          Array(cardsPerRow - rowCards.length)
            .fill(null)
            .map((_, index) => (
              <div
                key={`filler-${index}`}
                className="w-[225px] h-[225px] invisible"
              />
            ))}
      </div>
    );
  }

  return <div className="flex flex-col gap-[1rem]">{chunks}</div>;
};
