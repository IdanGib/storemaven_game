import { useTimeout } from "@chakra-ui/react";
import { useState } from "react";
export function useFakeLoader(time: number) {
  const [loading, setLoading] = useState(true);
  useTimeout(() => {
    setLoading(false);
  }, time);
  return loading;
}