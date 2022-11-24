import { Box, Container } from "@chakra-ui/react";
import { FunctionComponent, memo, useState } from "react";
import { IncrementUserScore } from "../api/api";
import { scoreUrl } from "../api/constants";
import Board, { BoardResult } from "../components/Board";
import PlayerInfo from "../components/PlayerInfo";
import { useToastMessage } from "../hooks/useToastMessage";
import config from '../utils/game-config.json';

export interface GameProps {
  name?: string;
}
const Game: FunctionComponent<GameProps> = memo(({ name = 'Unknonw' }) => {
  const toast = useToastMessage();
  const [reset, setReset] = useState(false);
  const activetime = config.activeTime;
  const activeText = config.activeText;
  const boardSize = config.boardSize;
  const handleResult = ({ success, message }: BoardResult) => {
    toast({ success, message });
    if (success) {
      IncrementUserScore(name, 1);
    }
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 0);
  }
  return <Container>
    <Box my='8'>
      <PlayerInfo name={name}/>
    </Box>
    { 
      !reset && 
      <Board 
        size={boardSize}
        scoreUrl={`${scoreUrl}/${name}`}
        activeText={activeText}
        activeTime={activetime} 
        onResult={handleResult}/>
    }
  </Container>
});

export default Game;