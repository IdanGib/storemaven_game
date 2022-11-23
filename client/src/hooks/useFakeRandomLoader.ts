import { useTimeout } from "@chakra-ui/react";
import { useState } from "react";
import { random } from "../utils/helpers";
export function useFakeRandomLoader() {
  const time = random(2000, 5000);
  const [loading, setLoading] = useState(true);
  useTimeout(() => {
    setLoading(false);
  }, time);
  return loading;
}