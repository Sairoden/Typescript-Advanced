// REACT
import { useEffect, useState } from "react";

// UI COMPONENTS
import { Container } from "../ui";

type TimerProps = {
  name: string;
  duration: number;
};

function Timer({ name, duration }: TimerProps) {
  const interval: number = 50;
  const time: number = duration * 1000;

  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - interval);
    }, interval);
  }, []);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={time} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}

export default Timer;
