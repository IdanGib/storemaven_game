import { Container, HStack, Link, Text } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";
import { dashboardUrl, getScoreUrl } from "../api/constants";
import { ScoreResponse } from "../api/interfaces";
import { useFetchJson } from "../hooks/useFetch";

export interface PlayerInfoProps {
  name: string;
}
const PlayerInfo: FunctionComponent<PlayerInfoProps> = memo(({ name }) => {
  const [loading, err, data] = useFetchJson<ScoreResponse>(getScoreUrl);
  return <Container>
    <HStack spacing={8}>
        <Link href={dashboardUrl} target='_blank'>Dashboard</Link>
        <Text>{name}</Text>
        <Text>{data?.score || 'No score'}</Text>
    </HStack>
  </Container>;
});
export default PlayerInfo;