import { CloseButton, Container, HStack, Link, Spacer } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";
import { dashboardUrl } from "../api/constants";
import UserName from "../parts/UserName";

export interface PlayerInfoProps {
  name: string;
}
const PlayerInfo: FunctionComponent<PlayerInfoProps> = memo(({ name }) => {
  return <Container>
    <HStack spacing={8}>
        <UserName name={name}/>
        <Spacer/>
        <Link 
          fontSize='sm' 
          href={dashboardUrl} 
          target='_blank'>Dashboard</Link>
        <Link 
          fontSize='sm'
          href={'/'}>
            <CloseButton/>
          </Link>
    </HStack>
  </Container>;
});
export default PlayerInfo;