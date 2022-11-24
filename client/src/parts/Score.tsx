import { Text } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";
import { getScoreUrl } from "../api/constants";
import { ScoreResponse } from "../api/interfaces";
import { useFetchJson } from "../hooks/useFetch";
export interface ScoreProps {}
const Score: FunctionComponent<ScoreProps> = memo(() => {
  const [loading, err, data] = useFetchJson<ScoreResponse>(getScoreUrl);
  return <Text>Score</Text>
});
export default Score;