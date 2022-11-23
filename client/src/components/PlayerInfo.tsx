import { Container, Heading } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";

export interface PlayerInfoProps {}
const PlayerInfo: FunctionComponent<PlayerInfoProps> = memo(() => {
  return <Container>
    <Heading>Player Info</Heading>
  </Container>;
});
export default PlayerInfo;