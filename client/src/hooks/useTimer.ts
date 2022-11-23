import { useRef, useState } from "react";
export enum TimerStates {
  START = 'start',
  END = 'end',
  IDLE = 'idle'
}

export function useTimer(time: number): [TimerStates, () => void, () => void] {
  const ref = useRef<NodeJS.Timeout>();
  const [state, setState] = useState<TimerStates>(TimerStates.IDLE);

  const resetTimer = () => {
    const timer = ref.current;
    timer && clearTimeout(timer);
  }

  const startTimer = () => {
    resetTimer();
    setState(TimerStates.START);
    ref.current = setTimeout(() => { 
      setState(TimerStates.END) 
    }, time);
  }
  return [state, startTimer, resetTimer];
}