import { Box, Container } from "@chakra-ui/react";
import { FunctionComponent, memo, useEffect, useState } from "react";
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
  const [boardDisabled, setBoardDisabled] = useState(false);
  const activetime = config.activeTime;
  const activeText = config.activeText;
  const boardSize = config.boardSize;
  useEffect(() => {
    if (boardDisabled) {
      setBoardDisabled(false);
    }
  }, [boardDisabled]);
  const handleResult = ({ success, message }: BoardResult) => {
    toast({ success, message });
    if (success) {
      IncrementUserScoore(name, 1);
    }
    setBoardDisabled(true);
  }
  return <Container>
    <Box my='8'>
      <PlayerInfo name={name}/>
    </Box>
    { 
      !boardDisabled && 
      <Board 
        size={boardSize}
        activeText={activeText}
        activeTime={activetime} 
        onResult={handleResult}/>
    }
  </Container>
});

export default Game;