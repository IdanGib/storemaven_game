import { useRef, useState } from "react";
export type TimerState = 'start' | 'end' | 'idle';
export function useTimer(time: number) {
  const ref = useRef<NodeJS.Timeout>();
  const [state, setState] = useState<TimerState>('idle');

  const resetTimer = () => {
    const timer = ref.current;
    timer && clearTimeout(timer);
  }

  const startTimer = () => {
    resetTimer();
    setState('start');
    if (ref.current) {
      ref.current = setTimeout(() => { 
        setState('end') 
      }, time);
    }
  }
  return [state, startTimer, resetTimer];
}