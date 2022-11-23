import { Button, FormControl, Input, VStack } from "@chakra-ui/react";
import { FunctionComponent, memo, useState } from "react";
import { useNavigate } from "react-router-dom";
export interface UserFormProps {}
const UserForm: FunctionComponent<UserFormProps> = memo(() => {
  const [name, setName] = useState('');
  const nav = useNavigate();
  const handelStart = (name: string) => {
    nav(`/game/${name}`)
  }
  const handleKeyDown = (key: string) => {
    if (name && key === 'Enter') {
      handelStart(name);
    }
  }
  return <FormControl
        as={VStack}
        spacing='4'
        p='8' 
        onKeyDown={({ key }) => handleKeyDown(key)}>
      <Input 
        value={name}
        onChange={({ target: { value } }) => setName(value)}
        placeholder='Enter your name'/>
      <Button 
        disabled={!name}
        onClick={() => handelStart(name)}>Start</Button>
  </FormControl>
});
export default UserForm;