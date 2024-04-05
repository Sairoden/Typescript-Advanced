// COMPONENTS
import { AddTimer, Header, Timers } from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </>
  );
}

export default App;
