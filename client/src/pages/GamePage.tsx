import { Container, Heading } from "@chakra-ui/react";
import { memo } from "react";
import { useParams } from "react-router-dom";
import Game from "../features/Game";

const GamePage = memo(() => {
  const { id } = useParams<{ id: string }>();
  return <Container>
    <Heading>Game</Heading>
    <Game name={id}/>
  </Container>
});

export default GamePage;