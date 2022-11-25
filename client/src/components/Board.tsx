import { Container, Spinner, VStack } from "@chakra-ui/react";
import { FunctionComponent, memo, useEffect, useRef } from "react";
import { ScoreResponse } from "../api/interfaces";
import { useFakeRandomLoader } from "../hooks/useFakeRandomLoader";
import { useFetchJson } from "../hooks/useFetch";
import { useKeyDown } from "../hooks/useKeyDown";
import { useTimer } from "../hooks/useTimer";
import Indicator from "../parts/Indicator";
import Score from "../parts/Score";
import { BoardSuccessMessages, TimerStates } from "../utils/constants";
import { getKeyboardMessages, getRandomSide, getTimingMessages } from "../utils/helpers";
import ShapesDisplay from "./ShapesDisplay";
export interface BoardResult {
  success: boolean;
  message?: string;
}
export interface BoardProps {
  activeTime: number;
  activeText: string;
  rightKey: string;
  leftKey: string;
  size: number;
  scoreUrl: string
  onResult: (result: BoardResult) => void;
}
const Board: FunctionComponent<BoardProps> = memo(({ 
  activeTime, onResult, activeText, size, scoreUrl, rightKey, leftKey
}) => {
  const loading = useFakeRandomLoader();
  const [scoreData] = useFetchJson<ScoreResponse>(scoreUrl);
  const [timer, startTimer]  = useTimer(activeTime);
  const sideRef = useRef<string>(getRandomSide([rightKey, leftKey]));
  useEffect(() => {
    if (!loading) {
      startTimer();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useKeyDown(({ key }) => {
    let success = false;
    let message: string | undefined = 
      getKeyboardMessages(key, [rightKey, leftKey]) || 
      getTimingMessages(timer);

    const correct = (key === sideRef.current);
    const inTime = timer === TimerStates.START;
    if (correct && inTime) {
      success = (key === sideRef.current);
      message = BoardSuccessMessages.CORRECT_SIDE;
    }
    onResult({ message, success });
  });

  return <Container centerContent>
    <VStack spacing='8'>
      <ShapesDisplay 
        hide={loading} 
        size={size} 
        leftKey={leftKey}
        rightKey={rightKey}
        side={sideRef.current}/>
      <Spinner 
        size='lg'
        position='absolute'
        hidden={!loading}/>
      <Score score={scoreData?.result?.score}/>
      <Indicator 
        active={timer === TimerStates.START}
        activeText={activeText}/>
    </VStack>
  </Container>;
});
export default Board;