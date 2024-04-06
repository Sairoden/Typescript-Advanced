// UI COMPONENTS
import { Button } from "../ui";

// CONTEXTS
import { useTimersContext } from "../contexts";

function Header() {
  const { isRunning, startTimers, stopTimers } = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={isRunning ? stopTimers : startTimers}>
        {isRunning ? "Stop" : "Start "} Timers
      </Button>
    </header>
  );
}

export default Header;
