import { Box, Container } from "@chakra-ui/react";
import { FunctionComponent, memo, useEffect, useState } from "react";
import { IncrementUserScore } from "../api/api";
import { scoreUrl } from "../api/constants";
import Board, { BoardResult } from "../components/Board";
import PlayerInfo from "../components/PlayerInfo";
import { useToastMessage } from "../hooks/useToastMessage";
import { GameConfig } from "../utils/constants";

export interface GameProps {
  name?: string;
  config: GameConfig;
}
const Game: FunctionComponent<GameProps> = memo(({ 
  name = 'Unknonw', 
  config: { activeText, boardSize, activeTime } }) => {
  const toast = useToastMessage();
  const [reset, setReset] = useState(true);

  useEffect(() => {
    setReset(false);
  }, []);

  const handleResult = async ({ success, message }: BoardResult) => {
    toast({ success, message });
    if (success) {
      await IncrementUserScore(name, 1);
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
        activeTime={activeTime} 
        onResult={handleResult}/>
    }
  </Container>
});

export default Game;