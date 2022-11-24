import { Container } from "@chakra-ui/react";
import { memo } from "react";
import { useParams } from "react-router-dom";
import Game from "../features/Game";
import config from '../utils/game-config.json';
const GamePage = memo(() => {
  const { id } = useParams<{ id: string }>();
  return <Container>
    <Game config={config} name={id}/>
  </Container>
});

export default GamePage;