import { Text } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";
export interface ScoreProps {}
const Score: FunctionComponent<ScoreProps> = memo(() => {
  return <Text>Score</Text>
});
export default Score;