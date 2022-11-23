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
  const handelFinish = () => {
    console.log('handel finish');
  }
  return <Container>
    <PlayerInfo name={name}/>
    <Board 
      activeTime={activetime} 
      onFinish={handelFinish}/>
  </Container>
});

export default Game;