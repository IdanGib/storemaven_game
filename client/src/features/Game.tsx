import { Container } from "@chakra-ui/react";
import { memo } from "react";
import Board from "../components/Board";
import Message from "../components/Message";
import PlayerInfo from "../components/PlayerInfo";

export interface GameProps {}
const Game = memo(() => {
  return <Container>
    <PlayerInfo/>
    <Board/>
    <Message/>
  </Container>
});

export default Game;