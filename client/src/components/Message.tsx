import { Container, Heading } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";

export interface MessageProps {}
const Message: FunctionComponent<MessageProps> = memo(() => {
  return <Container>
    <Heading>Message</Heading>
  </Container>;
});
export default Message;