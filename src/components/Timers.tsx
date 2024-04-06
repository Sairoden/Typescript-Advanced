// COMPONENTS
import { Timer } from "./index";

// CONTEXTS
import { useTimersContext } from "../contexts";

function Timers() {
  const { timers } = useTimersContext();

  return (
    <ul>
      {timers.map(timer => (
        <Timer key={timer.name} {...timer} />
      ))}
    </ul>
  );
}

export default Timers;
