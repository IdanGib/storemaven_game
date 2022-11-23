import { useEffect } from "react";
export function useKeyDown(callback: (key: KeyboardEvent) => void) {
  useEffect(() =>{
    window.removeEventListener('keydown', callback);
    window.addEventListener('keydown', callback);
    return () => {
      window.removeEventListener('keydown', callback);
    }
  } , [callback]);
}