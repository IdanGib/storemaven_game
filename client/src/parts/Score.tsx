import { Spinner, Text } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";
export interface ScoreProps {
  score?: number;
  isLoading?: boolean;
  err?: string;
}
const Score: FunctionComponent<ScoreProps> = memo(({ score = 0, isLoading, err }) => {
  if (isLoading) {
    return <Spinner/>
  }
  if (err) {
    return <Text>{err}</Text>
  }
  return <Text>Score: {score}</Text>
});
export default Score;