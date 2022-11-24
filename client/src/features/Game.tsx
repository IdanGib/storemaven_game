import { Container } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";
import { IncrementUserScoore } from "../api/api";
import Board, { BoardResult } from "../components/Board";
import PlayerInfo from "../components/PlayerInfo";
import { useToastMessage } from "../hooks/useToastMessage";
import config from '../utils/game-config.json';

export interface GameProps {
  name?: string;
}
const Game: FunctionComponent<GameProps> = memo(({ name = 'Unknonw' }) => {
  const toast = useToastMessage();
  const activetime = config.activeTime;
  const activeText = config.activeText;
  const handleResult = ({ success, message }: BoardResult) => {
    toast({ success, message });
    if (success) {
      IncrementUserScoore(name, 1);
    }
  }
  return <Container>
    <PlayerInfo name={name}/>
    <Board 
      activeText={activeText}
      activeTime={activetime} 
      onResult={handleResult}/>
  </Container>
});

export default Game;