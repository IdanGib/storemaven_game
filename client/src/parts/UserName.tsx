import { Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

export interface UserNameProps {
  name: string;
}
const UserName: FunctionComponent<UserNameProps> = ({ name }) => {
  return <Text fontWeight='bold'>{name}</Text>
}

export default UserName;