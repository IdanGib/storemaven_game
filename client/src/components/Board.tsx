import { Container, Spinner, VStack } from "@chakra-ui/react";
import { FunctionComponent, memo, useEffect, useState } from "react";
import { useFakeRandomLoader } from "../hooks/useFakeRandomLoader";
import { useKeyDown } from "../hooks/useKeyDown";
import { TimerStates, useTimer } from "../hooks/useTimer";
import Indicator from "../parts/Indicator";
import Message from "../parts/Message";
import { BoardFailMessages } from "../utils/constants";
import ShapesDisplay, { Sides } from "./ShapesDisplay";
export interface BoardProps {
  activeTime: number;
  onFinish: () => void;
}
const Board: FunctionComponent<BoardProps> = memo(({ activeTime, onFinish }) => {
  const loading = useFakeRandomLoader();
  const [message, setMessage] = useState('');
  const [timer, startTimer]  = useTimer(activeTime);
  useEffect(() => {
    if (!loading) {
      startTimer();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  useKeyDown(({ key }) => {
    if (!['a', 'l'].includes(key)) {
      setMessage(BoardFailMessages.WRONG_KEY);
    } else if (loading) {
      setMessage(BoardFailMessages.TO_SOON);
    } else if (timer === TimerStates.END) {
      setMessage(BoardFailMessages.TOO_LATE);
    }
    if (timer === TimerStates.END) {
      onFinish();
    }
  });

  return <Container>
    <VStack hidden={loading} spacing='8'>
      <Indicator 
        active={timer === TimerStates.START}
        activeText='Choose Side!'/>
      <ShapesDisplay side={Sides.LEFT}/>
      <Message text={message} />
    </VStack>
    <Spinner hidden={!loading}/>
  </Container>;
});
export default Board;