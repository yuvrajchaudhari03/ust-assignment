import React from "react";
import { statuses } from "../../data/statuses";
import { Status } from "../../interfaces/types";
import { machines } from "../../data/machineList";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface FilterButtonsProps {
  setFilter: (filter: Status) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ setFilter }) => {
  const machines = useSelector((state: RootState) => state.machines.machines);

  const getCount = (type: string) => {
    return machines?.filter((machine) => machine.status === type).length;
  };

  return (
    <div className="flex flex-wrap space-x-2 space-y-2 md:space-y-0 md:flex-nowrap">
      {statuses.map((status) => (
        <button
          key={status.label}
          className={`text-white py-2 px-4 rounded ${status.bgColor}`}
          onClick={() => setFilter(status)}
        >
          {status.label} ({getCount(status.label)})
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
