import { Container, HStack, Link, Text } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";
import { dashboardUrl, getScoreUrl } from "../api/constants";
import { ScoreResponse } from "../api/interfaces";
import { useFetchJson } from "../hooks/useFetch";
import Score from "../parts/Score";

export interface PlayerInfoProps {
  name: string;
}
const PlayerInfo: FunctionComponent<PlayerInfoProps> = memo(({ name }) => {
  const [loading, err, data] = useFetchJson<ScoreResponse>(getScoreUrl);
  console.log({ loading });
  return <Container>
    <HStack spacing={8}>
        <Link href={dashboardUrl} target='_blank'>Dashboard</Link>
        <Text>{name}</Text>
        {<Score 
          isLoading={loading} 
          err={err} 
          score={data?.score}/>}
    </HStack>
  </Container>;
});
export default PlayerInfo;