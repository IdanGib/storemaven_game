import { Container } from "@chakra-ui/react";
import { memo } from "react";
import { useParams } from "react-router-dom";
import Game from "../features/Game";

const GamePage = memo(() => {
  const { id } = useParams<{ id: string }>();
  return <Container>
    <Game name={id}/>
  </Container>
});

export default GamePage;