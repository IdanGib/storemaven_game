import { Container, Heading, Spinner } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";
import { useFakeRandomLoader } from "../hooks/useFakeRandomLoader";

export interface BoardProps {}
const Board: FunctionComponent<BoardProps> = memo(() => {
  const loading = useFakeRandomLoader();
  return <Container>
    { loading && <Spinner/> }
    <Heading>Board</Heading>
  </Container>;
});
export default Board;