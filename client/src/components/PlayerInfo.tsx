import { Container, HStack, Link, Text } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";
import { dashboardUrl } from "../api/constants";
import Score from "../parts/Score";

export interface PlayerInfoProps {
  name: string;
}
const PlayerInfo: FunctionComponent<PlayerInfoProps> = memo(({ name }) => {
  return <Container>
    <HStack spacing={8}>
        <Link href={dashboardUrl} target='_blank'>Dashboard</Link>
        <Text>{name}</Text>
        <Score/>
    </HStack>
  </Container>;
});
export default PlayerInfo;