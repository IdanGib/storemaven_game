import { Text } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";
export interface UserProps {}
const User: FunctionComponent<UserProps> = memo(() => {
  return <Text>User</Text>
});
export default User;