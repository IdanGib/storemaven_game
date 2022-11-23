import { Container, Heading } from "@chakra-ui/react";
import { memo } from "react";
import UserForm from "../parts/UserForm";

const WelcompPage = memo(() => {
  return <Container centerContent>
    <Heading>Welcome</Heading>
    <UserForm/>
  </Container>
});

export default WelcompPage;