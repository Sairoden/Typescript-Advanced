// COMPONENTS
import { Timer } from "./index";

// CONTEXTS
import { useTimersContext } from "../contexts";

function Timers() {
  const { timers, isRunning } = useTimersContext();

  return (
    <ul>
      {timers.map(timer => (
        <Timer key={timer.name} {...timer} isRunning={isRunning} />
      ))}
    </ul>
  );
}

export default Timers;
