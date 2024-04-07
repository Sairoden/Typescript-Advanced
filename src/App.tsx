// COMPONENTS
import { AddTimer, Header, Timers } from "./components";

// CONTEXTS
import { TimersContextProvider } from "./contexts";

function App() {
  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
}

export default App;

// 73
