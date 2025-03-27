import CountUp from "react-countup";

interface CounterProps {
  end: number;
}

export function Counter({ end }: CounterProps) {
  return (
    <CountUp start={0} end={end} duration={2} className="font-bold text-white" />
  );
}
