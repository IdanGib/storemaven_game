import { useTimeout } from "@chakra-ui/react";
import { useState } from "react";
import { Utils } from "../utils";
export function useFakeRandomLoader() {
  const time = Utils.random(2000, 5000);
  const [loading, setLoading] = useState(true);
  useTimeout(() => {
    setLoading(false);
  }, time);
  return loading;
}