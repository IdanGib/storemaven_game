import { Container, Spinner, VStack } from "@chakra-ui/react";
import { FunctionComponent, memo, useEffect } from "react";
import { useFakeRandomLoader } from "../hooks/useFakeRandomLoader";
import { useKeyDown } from "../hooks/useKeyDown";
import { useTimer } from "../hooks/useTimer";
import Indicator from "../parts/Indicator";
import { SidesKeyboard, TimerStates } from "../utils/constants";
import { getKeyboardMessages, getTimingMessages } from "../utils/helpers";
import ShapesDisplay, { Sides } from "./ShapesDisplay";
export interface BoardResult {
  success: boolean;
  message?: string;
}
export interface BoardProps {
  activeTime: number;
  activeText: string;
  onResult: (result: BoardResult) => void;
}
const Board: FunctionComponent<BoardProps> = memo(({ 
  activeTime, onResult, activeText
}) => {
  const loading = useFakeRandomLoader();
  const [timer, startTimer]  = useTimer(activeTime);
  useEffect(() => {
    if (!loading) {
      startTimer();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useKeyDown(({ key }) => {
    let success = false;
    const message = 
      getKeyboardMessages(key as SidesKeyboard) || 
      getTimingMessages(timer);
    onResult({ message, success });
  });

  return <Container>
    <VStack hidden={loading} spacing='8'>
      <Indicator 
        active={timer === TimerStates.START}
        activeText={activeText}/>
      <ShapesDisplay side={Sides.LEFT}/>
    </VStack>
    <Spinner hidden={!loading}/>
  </Container>;
});
export default Board;