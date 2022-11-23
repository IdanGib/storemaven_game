import { Container, Heading } from "@chakra-ui/react";
import { memo } from "react";
import Game from "../features/Game";

const GamePage = memo(() => {
  return <Container>
    <Heading>Game</Heading>
    <Game/>
  </Container>
});

export default GamePage;