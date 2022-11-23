import { Container } from "@chakra-ui/react";
import { FunctionComponent, memo, useState } from "react";
import Board from "../components/Board";
import PlayerInfo from "../components/PlayerInfo";
import config from '../utils/game-config.json';

export interface GameProps {
  name?: string;
}
const Game: FunctionComponent<GameProps> = memo(({ name = 'Unknonw' }) => {
  const activetime = config.activeTime;
  const [level, setLevel] = useState(0);
  const handelFinish = () => {
    setLevel(level + 1);
  }
  return <Container>
    <PlayerInfo name={name}/>
    <Board 
      activeTime={activetime} 
      level={level} 
      onFinish={handelFinish}/>
  </Container>
});

export default Game;