// REACT
import { createContext, ReactNode, useContext, useReducer } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  timers: [],
  isRunning: false,
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

type TimersContextProviderProps = {
  children: ReactNode;
};

type AddTimerAction = {
  type: "timers/addTimer";
  payload: Timer;
};

type StartTimersAction = {
  type: "timers/startTimers";
};

type StopTimersAction = {
  type: "timers/stopTimers";
};

type Action = AddTimerAction | StartTimersAction | StopTimersAction;

const timersReducer = (state: TimersState, action: Action): TimersState => {
  switch (action.type) {
    case "timers/startTimers":
      return { ...state, isRunning: true };

    case "timers/stopTimers":
      return { ...state, isRunning: false };

    case "timers/addTimer":
      return {
        ...state,
        timers: [
          ...state.timers,
          { name: action.payload.name, duration: action.payload.duration },
        ],
      };

    default:
      return state;
  }
};

export const TimersContextProvider = ({
  children,
}: TimersContextProviderProps) => {
  const [{ isRunning, timers }, dispatch] = useReducer(
    timersReducer,
    initialState
  );

  const value = {
    isRunning,
    timers,
    addTimer: (timerData: Timer) => {
      dispatch({
        type: "timers/addTimer",
        payload: timerData,
      });
    },
    startTimers: () => {
      dispatch({ type: "timers/startTimers" });
    },
    stopTimers: () => {
      dispatch({ type: "timers/stopTimers" });
    },
  };

  return (
    <TimersContext.Provider value={value}>{children}</TimersContext.Provider>
  );
};

export const useTimersContext = () => {
  const timersContext = useContext(TimersContext)!;

  if (timersContext === null)
    throw new Error("TimersContext should not be null");

  return timersContext;
};
