import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MachineList from "./components/MachineList/MachineList";
import { Machine, Status } from "./interfaces/types";
import { RootState } from "./store/store.js";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import { setFilter } from "./slices/filterSlice";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);
  const machines = useSelector((state: RootState) => state.machines.machines);
  const [filteredMachines, setFilteredMachines] = React.useState<Machine[]>([]);

  useEffect(() => {
    const filtered = filter
      ? machines.filter((machine) => machine.status === filter.label)
      : machines;
    setFilteredMachines(filtered);
  }, [filter, machines]);

  return (
    <div className="p-4 md:p-8">
      <FilterButtons setFilter={(filter: Status) => dispatch(setFilter(filter))} />
      <div className="my-2 mt-2 font-bold text-md">Total machines: {machines.length}</div>
      <MachineList filter={filter} filteredMachines={filteredMachines} />
    </div>
  );
};

export default App;
