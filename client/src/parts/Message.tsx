import { Container, Heading } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";

export interface MessageProps {
  text: string;
}
const Message: FunctionComponent<MessageProps> = memo(({ text }) => {
  return <Container>
    <Heading>{ text }</Heading>
  </Container>;
});
export default Message;